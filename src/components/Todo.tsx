import { useSelector } from "react-redux";
import NavBar from "./shared/NavBar";
import TodoPreview from "./todo/Todo-Preview";
import TodoSideBar from "./todo/Todo-Sidebar";
import TodoBar from "./todo/TodoBar";
const Todo = () => {
    const sidebarVisible = useSelector((state: any) => state.uiSlice.sidebarVisible)
    return (
        <div>
            <NavBar />
            <div className="todo-container">
                <div className="todo">
                    <TodoBar />
                    {(() => {
                        if(sidebarVisible){
                            return <TodoSideBar />
                        }
                    })()}
                    <TodoPreview />
                </div>
            </div>
        </div>
    );
};
export default Todo;
