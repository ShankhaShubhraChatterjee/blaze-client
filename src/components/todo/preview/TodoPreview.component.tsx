// React Imports
import { useEffect, useState } from 'react'

// Chakra UI Imports
import { Box } from '@chakra-ui/react'
import { Checkbox } from '../../ui/checkbox'

// Custom User Component Imports
import TodoItem from '../todo-item/TodoItem.component'

// Stylesheet Imports
import './todo-preview.component.scss'

// Temporary Data Imports
import { todos } from '../../../../tmp/data/data'

import {
    DndContext,
    useSensor,
    useSensors,
    DragEndEvent,
    DragStartEvent,
    TouchSensor,
    MouseSensor,
    KeyboardSensor,
    closestCorners
} from '@dnd-kit/core'

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import { sortTodo } from '../../../redux/todo.slice'
// Configuration Imports
import { rootURL } from '../../../configs/server.config'
import { useDispatch, useSelector } from 'react-redux'

// Root Component (TodoPreview)
const TodoPreview = (props: any) => {
    const todoList = useSelector((state: any) => state.todoSlice.todos)
    const dispatch = useDispatch()
    

    // Hardware Sensors 
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 8, // Minimum pixels moved before drag starts
        },
    });

    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250, // Longer delay on touch to prevent accidental drag
            tolerance: 5,
        },
    });
    const keyboardSensor = useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    })

    const sensors = useSensors(touchSensor, keyboardSensor, mouseSensor)

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (over && active.id !== over.id) {
            const items = todoList
                const oldIndex = items.findIndex(
                    (item: any) => item.id === active.id
                )
                const newIndex = items.findIndex(
                    (item: any) => item.id === over.id
                )
                const newList = arrayMove(todoList, oldIndex, newIndex)
                dispatch(sortTodo(newList))
                return arrayMove(todoList, oldIndex, newIndex)
        }
    }

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        console.log(active)
    }

    return (
        <div className="todo__preview--container">
            <Box shadow="md" className="todo__preview--header">
                <Checkbox color="orange.500" marginLeft={2.5} />
                <p>Todos / Objectives</p>
            </Box>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={todoList}
                    strategy={verticalListSortingStrategy}
                >
                    <ul className="todo__preview--list" ref={props.ref}>
                        {todoList.map((todo: any, index: number) => {
                            return (
                                <TodoItem
                                    key={todo.id}
                                    id={todo.id}
                                    index={index + 1}
                                    starred={todo.starred}
                                    checked={todo.checked}
                                    title={todo.title}
                                    description={todo.description}
                                />
                            )
                        })}
                    </ul>
                </SortableContext>
            </DndContext>
        </div>
    )
}
export default TodoPreview
