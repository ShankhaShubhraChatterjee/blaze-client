// React Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// React Redux Slice Imports
import { autoToggleSidebar } from './../../redux/todo-sidebar.slice'

// Custom User Component Imports
import NavBar from '../../components/navbar/Navbar.component'
import TodoPreview from '../../components/todo/preview/TodoPreview.component'
import TodoSideBar from '../../components/todo/sidebar/TodoSidebar.component'
import TodoBar from '../../components/todo/toolbar/TodoToolbar.component'

// Stylesheet Imports
import './todo.page.scss'

// Root Component (Todo)
const Todo = () => {
    const sidebarVisible = useSelector(
        (state: any) => state.todoSidebarSlice.sidebarVisible
    )
    const dispatch = useDispatch()
    window.addEventListener('resize', () => {
        dispatch(autoToggleSidebar())
    })
    return (
        <div>
            <NavBar />
            <div className="todo__container">
                <div className="todo">
                    <TodoBar />
                    {sidebarVisible ? (
                        <TodoSideBar translate="0px" />
                    ) : (
                        <TodoSideBar translate="-350px" />
                    )}
                    <TodoPreview />
                </div>
            </div>
        </div>
    )
}
export default Todo
