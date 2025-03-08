import { todos } from '../../../../tmp/data/data'
import './todo-preview.component.scss'
import { useState } from 'react';
import { Box } from '@chakra-ui/react'
import TodoItem from '../todo-item/TodoItem.component';

const TodoPreview = () => {
    const [starred, setStarred] = useState(false)
    const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    return (
        <div className="todo__preview--container">
            <Box shadow='md' className='todo__preview--header'>Todos / Objectives</Box>
            <ul className="todo__preview--list">
                {todos.map((todo: any, index: number) => {
                    return(
                        <TodoItem key={index} title={todo.title} description={todo.description} />
                    )
                })}
            </ul>
        </div>
    )
}
export default TodoPreview
