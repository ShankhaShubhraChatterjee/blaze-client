import { Box, Accordion, AccordionItem, Text, Stack, AccordionRoot, AccordionItemTrigger } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { toggleSideBar } from "../../../redux/todo-sidebar.slice"

import './todo-sidebar.component.scss';

const TodoSideBar = (props: any) => {
    const dispatch = useDispatch()
    const sidebarVisible = useSelector((state: any) => state.todoSidebarSlice.sidebarVisible)
    const hideSideBar = {
        width: "10px"
    }

    return (
        <div className="todo-sidebar-container" style={!sidebarVisible ? hideSideBar : {}}>
            <AccordionRoot defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionItemTrigger>
                            <Box as="span" flex={1} textAlign='left'>Completed</Box>
                        </AccordionItemTrigger>
                    </h2>
                    <Stack direction="column" className="sidebar-items">
                        <a href="#" >
                            <Text>task-1</Text>
                        </a>
                        <a href="#">
                            <Text>task-2</Text>
                        </a>
                        <a href="#">
                            <Text>task-3</Text>
                        </a>
                        <a href="#">
                            <Text>task-4</Text>
                        </a>
                        <a href="#">
                            <Text>task-5</Text>
                        </a>
                    </Stack>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionItemTrigger>
                                <Box as="span" flex='1' textAlign='left'>
                                    Remaining
                                </Box>
                            </AccordionItemTrigger>
                        </h2>

                        <Stack direction="column" className="sidebar-items">
                            <a href="#" >
                                <Text>task-1</Text>
                            </a>
                            <a href="#">
                                <Text>task-2</Text>
                            </a>
                            <a href="#">
                                <Text>task-3</Text>
                            </a>
                            <a href="#">
                                <Text>task-4</Text>
                            </a>
                            <a href="#">
                                <Text>task-5</Text>
                            </a>
                        </Stack>

                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionItemTrigger>
                                <Box as="span" flex='1' textAlign='left'>
                                    In Progress
                                </Box>

                            </AccordionItemTrigger>
                        </h2>

                        <Stack direction="column" className="sidebar-items">
                            <a href="#" >
                                <Text>task-1</Text>
                            </a>
                            <a href="#">
                                <Text>task-2</Text>
                            </a>
                            <a href="#">
                                <Text>task-3</Text>
                            </a>
                            <a href="#">
                                <Text>task-4</Text>
                            </a>
                            <a href="#">
                                <Text>task-5</Text>
                            </a>
                        </Stack>

                    </AccordionItem>
            </AccordionRoot>
        </div>
    )
}
export default TodoSideBar