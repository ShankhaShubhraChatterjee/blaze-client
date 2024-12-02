import { Button, IconButton, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { showSideBar, toggleSideBar } from "../../../redux/todo-sidebar.slice";

import './todo-toolbar.component.scss'
const TodoBar = () => {
    const dispatch = useDispatch()
    const sidebarVisible = useSelector((state: any) => state.todoSidebarSlice.sidebarVisible)
    return (
        <div className="todobar-container">
            <div className="todobar">
                <Stack direction="row" padding={0}>
                    <IconButton 
                    aria-label="" 
                    size="sm" 
                    colorScheme="orange" 
                    variant="outline" 
                    className="todobar-sidebar-button"
                    onClick={() => sidebarVisible ? dispatch(toggleSideBar(false)) : dispatch(toggleSideBar(true))}>
                        <i className="bi bi-layout-sidebar"></i>
                    </IconButton>
                    <Text className="todobar-header" fontSize="xl">User's Todo Dashboard</Text>
                </Stack>
                <Stack direction="row" spacing={2} className="todobar-buttons">
                    <Button size="sm" colorScheme="green">Add</Button>
                    <Button isDisabled size="sm" colorScheme="red">Delete</Button>
                </Stack>
            </div>
        </div>
    )
}

export default TodoBar;