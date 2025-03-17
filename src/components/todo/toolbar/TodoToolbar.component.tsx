// React Icons Imports
import { FaPlus, FaTrash } from 'react-icons/fa6'
import { FiSidebar } from "react-icons/fi";

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from './../../../redux/todo-sidebar.slice';

// Chakra UI Imports
import { Box, Button, Stack, Text } from '@chakra-ui/react'

// Stylesheet Imports
import './todo-toolbar.component.scss'

// Root Component (TodoBar)
const TodoBar = () => {
    const dispatch = useDispatch()
    const sidebarVisible: boolean = useSelector((state: any) => state.todoSidebarSlice.sidebarVisible)
    const createTodoItem = () => { }
    const deleteTodoItem = () => { }
    return (
        <div className="todo__toolbar">
            <Stack
                direction="row"
                padding={0}
                width="full"
                justifyContent="space-between"
            >
                <Text className="todo__toolbar--header" fontSize="md">
                    User's Todo Dashboard
                </Text>
                <Box className="todo__toolbar--button--container">
                    <Button
                        className="todo__toolbar--button todo__toolbar--sidebar--toggle--button"
                        size="xs"
                        colorPalette="blue"
                        rounded="full"
                        marginRight="1.5"
                        onClick={() => dispatch(toggleSideBar(!sidebarVisible))}
                    >
                        <FiSidebar />
                    </Button>
                    <Button
                        className="todo__toolbar--button"
                        size="xs"
                        colorPalette="green"
                        rounded="full"
                        marginRight="1.5"
                    >
                        <FaPlus />
                        <p>Add</p>
                    </Button>
                    <Button
                        className="todo__toolbar--button"
                        size="xs"
                        colorPalette="red"
                        rounded="full"
                    >
                        <FaTrash />
                        <p>Delete</p>
                    </Button>
                </Box>
            </Stack>
        </div>
    )
}

export default TodoBar
