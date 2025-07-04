// React Icon Imports
import { FaRegStar } from 'react-icons/fa'
import { GrInProgress } from 'react-icons/gr'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'

// React Redux Imports

// Chakra Imports
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from './../../ui/accordion'

// Stylesheet Imports
import './todo-sidebar.component.scss'
import { Box } from '@chakra-ui/react'

interface TodoSidebarInterface {
    translate: string
}

const TodoSideBar = (props: TodoSidebarInterface) => {
    const sidebarAccordions = [
        {
            id: 1,
            title: 'Completed',
            icon: <IoCheckmarkDoneCircleSharp size={24} color="yellowgreen" />,
            tasks: [{ id: 1, title: 'Objective 0' }],
        },
        {
            id: 2,
            title: 'Remaining',
            icon: <GrInProgress size={24} color="goldenrod" />,
            tasks: [{ id: 1, title: 'Objective 1' }],
        },
        {
            id: 3,
            title: 'Starred',
            icon: <FaRegStar size={24} color="goldenrod" />,
            tasks: [
                { id: 1, title: 'Objective 2' },
                { id: 2, title: 'Objective 2' },
            ],
        },
    ]
    return (
        <Box
            className="todo__sidebar--container"
            transform={`translateX(${props.translate})`}
            bg={{ base: 'white', _dark: 'black' }}
        >
            <AccordionRoot variant="enclosed" collapsible defaultValue={['b']}>
                {sidebarAccordions.map((accordion: any) => {
                    return (
                        <AccordionItem
                            key={accordion.id}
                            value={accordion.title}
                        >
                            <AccordionItemTrigger>
                                {accordion.icon}
                                {accordion.title}
                            </AccordionItemTrigger>

                            {accordion.tasks.map((task: any) => {
                                return (
                                    <AccordionItemContent
                                        fontSize="14px"
                                        fontWeight="semibold"
                                        key={task.id}
                                    >
                                        <em>{task.title}</em>
                                    </AccordionItemContent>
                                )
                            })}
                        </AccordionItem>
                    )
                })}
            </AccordionRoot>
        </Box>
    )
}
export default TodoSideBar
