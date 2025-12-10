// React Imports
import { useState } from 'react'

// Chakra Imports
import { Button, IconButton, Box } from '@chakra-ui/react'
import { Checkbox } from './../../ui/checkbox'

// React Icon Imports
import { FaTrashAlt, FaPenAlt, FaRegStar, FaStar } from 'react-icons/fa'
import { MdDragHandle } from 'react-icons/md'

// React DnD-Kit Imports
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

// Stylesheet Imports
import './todoItem.component.scss'

interface TodoItemInterface {
    id: number,
    index: number,
    checked: boolean,
    starred: boolean,
    title: string,
    description: string

}

// Root Component (TodoItem)
const TodoItem = (props: TodoItemInterface) => {
    console.log(typeof(props))
    const { attributes, setNodeRef, listeners, transform, transition } =
        useSortable({ id: props.id })
    const [starred, setStarred] = useState(props.starred)
    const [grab, setGrab] = useState(props.checked)
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }
    return (
        <Box
            ref={setNodeRef}
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
                    <IconButton
                        {...attributes}
                        {...listeners}
                        variant="outline"
                        onMouseUp={() => setGrab(false)}
                        onMouseDown={() => setGrab(true)}
                        onMouseLeave={() => setGrab(false)}
                        style={{ cursor: grab ? 'grabbing' : 'grab' }}
                    >
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
                <h2 className="todo__list--item--content--header">
                    {props.title}
                </h2>
                <p className="todo__list--item--content--body">
                    {props.description}
                </p>
            </div>
            <div className="todo__list--item--content--index">
                {props.index}
            </div>
        </Box>
    )
}

export default TodoItem
