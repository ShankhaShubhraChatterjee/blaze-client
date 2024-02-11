import { Checkbox, IconButton, Stack } from '@chakra-ui/react'
import { todos } from './../data/data'
const TodoPreview = () => {
    return (
        <div className="todo-preview-container">
            <header>Todos</header>
            <ul className="todo-list">
                {todos.map((todo: any) => {
                    return (
                        <li className='todo-tasks' key={todo.id}>
                            <Checkbox colorScheme="orange" marginLeft="5px"></Checkbox>
                            <section className='todo-task-index'>
                                <p className='todo-index'>{todo.id}</p>
                            </section>
                            <section className='todo-task-info'>
                                <h4 className='todo-task-header'>{todo.header}</h4>
                                <p className='todo-task-content'>{todo.content}</p>
                            </section>
                            <section className='todo-task-buttons'>
                                <button className='edit-button'><i className="bi bi-pen edit"></i></button>
                                <button className='delete-button'><i className="bi bi-trash delete"></i></button>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default TodoPreview