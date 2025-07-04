// Chakra UI Imports
import { Box } from '@chakra-ui/react'

// Custom User Component Imports
import TodoItem from '../todo-item/TodoItem.component'

// Stylesheet Imports
import './todo-preview.component.scss'

// Temporary Data Imports
import { todos } from '../../../../tmp/data/data'
import { Checkbox } from '../../ui/checkbox'

import { useState } from 'react'
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    closestCenter,
} from '@dnd-kit/core'

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'

// Root Component (TodoPreview)
const TodoPreview = () => {
    const [todo, setTodo] = useState(todos)
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )
    const handleDragEnd = (event: object) => {
        const { active, over }: object = event

        if (active.id !== over.id) {
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
                    <ul className="todo__preview--list">
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
