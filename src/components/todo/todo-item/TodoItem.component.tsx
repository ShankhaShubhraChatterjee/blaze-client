// React Imports
import { useState } from 'react'

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
import { CSS } from '@dnd-kit/utilities'
// Root Component (TodoItem)
const TodoItem = (props: any) => {
    const { attributes, setNodeRef, listeners, transform, transition } = useSortable({ id: props.id });
    const [starred, setStarred] = useState(props.starred)
    const [grab, setGrab] = useState(props.checked)
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <Box
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
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
                    <IconButton variant="outline" onMouseUp={() => setGrab(false)} onMouseDown={() => setGrab(true)} onMouseLeave={() => setGrab(false)} style={{ cursor: grab ? 'grabbing' : 'grab' }}>
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
                <h2 className="todo__list--item--content--header">{props.title}</h2>
                <p className="todo__list--item--content--body">{props.description}</p>
            </div>
            <div className="todo__list--item--content--index">{props.index}</div>
        </Box>
    )
}

export default TodoItem
