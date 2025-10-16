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

// Axios Imports
import axios from 'axios'

import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    closestCenter,
    DragEndEvent,
} from '@dnd-kit/core'

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'

// Configuration Imports
import { rootURL } from '../../../configs/server.config'

// Root Component (TodoPreview)
const TodoPreview = (props: any) => {
    const [todo, setTodo] = useState(todos)
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(`${rootURL}/user/todo/fetch/foster0123`, {method: 'get'})
        .then((response) => setData(response.data))
        .catch((err) => console.error(err))
    }, [])

    console.log(data)
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (over && active.id !== over.id) {
            setTodo((items: any) => {
                const oldIndex = items.findIndex(
                    (item: any) => item.id === active.id
                )
                const newIndex = items.findIndex(
                    (item: any) => item.id === over.id
                )

                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }
    return (
        <div className="todo__preview--container">
            <Box shadow="md" className="todo__preview--header">
                <Checkbox color="orange.500" marginLeft={2.5} />
                <p>Todos / Objectives</p>
            </Box>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={todos}
                    strategy={verticalListSortingStrategy}
                >
                    <ul className="todo__preview--list" ref={props.ref}>
                        {todo.map((todo: any, index: number) => {
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
