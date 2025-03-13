// React Imports

// Chakra UI Imports
import { Box } from '@chakra-ui/react'

// Custom User Component Imports
import TodoItem from '../todo-item/TodoItem.component'

// Stylesheet Imports
import './todo-preview.component.scss'

// Temporary Data Imports
import { todos } from '../../../../tmp/data/data'

// Root Component (TodoPreview)
const TodoPreview = () => {
    return (
        <div className="todo__preview--container">
            <Box shadow="md" className="todo__preview--header">
                Todos / Objectives
            </Box>
            <ul className="todo__preview--list">
                {todos.map((todo: any, index: number) => {
                    return (
                        <TodoItem
                            key={index}
                            title={todo.title}
                            description={todo.description}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
export default TodoPreview
