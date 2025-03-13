// React Imports

// React Icon Imports
import { FaHeart } from 'react-icons/fa'
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

const TodoSideBar = (props: any) => {
    return (
        <Box
            className="todo__sidebar--container"
            bg={{ base: 'white', _dark: 'black' }}
        >
            <AccordionRoot
                variant="enclosed"
                multiple
                collapsible
                defaultValue={['b']}
            >
                {/* Completed Accordion */}
                <AccordionItem value="completed">
                    <AccordionItemTrigger>
                        <IoCheckmarkDoneCircleSharp
                            size={24}
                            color="yellowgreen"
                        />
                        Completed
                    </AccordionItemTrigger>
                    <AccordionItemContent fontSize="14px" fontWeight="semibold">
                        <em>Objective 0</em>
                    </AccordionItemContent>
                </AccordionItem>

                {/* Remaining Accordion */}
                <AccordionItem value="remaining">
                    <AccordionItemTrigger>
                        <GrInProgress size={24} color="goldenrod" />
                        Remaining
                    </AccordionItemTrigger>
                    <AccordionItemContent fontSize="14px" fontWeight="semibold">
                        <em>Objective 0</em>
                    </AccordionItemContent>
                    <AccordionItemContent fontSize="14px" fontWeight="semibold">
                        <em>Objective 1</em>
                    </AccordionItemContent>
                    <AccordionItemContent fontSize="14px" fontWeight="semibold">
                        <em>Objective 2</em>
                    </AccordionItemContent>
                </AccordionItem>
            </AccordionRoot>
        </Box>
    )
}
export default TodoSideBar
