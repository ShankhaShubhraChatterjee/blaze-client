// React Imports
import { useState } from 'react'

// React Dnd Imports
import { CSS } from '@dnd-kit/utilities'

// Chakra Imports
import { Button, IconButton, Box } from '@chakra-ui/react'
import { Checkbox } from './../../ui/checkbox'

// React Icon Imports
import {
    FaTrashAlt,
    FaPenAlt,
    FaRegSave,
    FaRegStar,
    FaStar,
} from 'react-icons/fa'
import { MdDragHandle } from 'react-icons/md'

// Stylesheet Imports
import './todoItem.component.scss'
import { useSortable } from '@dnd-kit/sortable'

// Root Component (TodoItem)
const TodoItem = ({ id, title, description }: any) => {
    const [starred, setStarred] = useState(false)
    const [grab, setGrab] = useState(false)
    const { attributes, listeners, transform, setNodeRef, transition } =
        useSortable({ id: id.toString() })
    const styles = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    return (
        <Box
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={styles}
            as="li"
            className="todo__preview--list--item"
            shadow="lg"
            bg={{ base: 'gray.contrast' }}
        >
            <header className="todo__preview--list--item--header">
                <div className="todo__list--item--header--section-1">
                    <Checkbox colorPalette="purple" />
                    <Checkbox // prettier-ignore
                        defaultChecked={false}
                        onChange={() => setStarred(!starred)}
                        colorPalette="yellow"
                        size="lg"
                        unstyled
                        icon={
                            starred ? (
                                <FaStar size={24} color="goldenrod" />
                            ) : (
                                <FaRegStar size={24} color="goldenrod" />
                            )
                        }
                    />
                </div>
                <div className="todo__list--item--header--section-2">
                    <IconButton variant="outline">
                        <MdDragHandle color="gray" />
                    </IconButton>
                    <Button variant="outline">
                        <FaPenAlt color="yellowgreen" />
                    </Button>
                    <Button variant="outline" color="red">
                        <FaTrashAlt />
                    </Button>
                </div>
            </header>

            <div className="todo__list--item--content">
                <h2 className="todo__list--item--content--header">{title}</h2>
                <p className="todo__list--item--content--body">{description}</p>
            </div>
            <div className="todo__list--item--content--index">{id + 1}</div>
        </Box>
    )
}

export default TodoItem
