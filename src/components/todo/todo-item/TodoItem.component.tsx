// React Imports
import { useState } from 'react'

// Chakra Imports
import { Button, IconButton, Box, Editable } from '@chakra-ui/react'
import { Checkbox } from './../../ui/checkbox'

// React Icon Imports
import { FaTrashAlt, FaPenAlt, FaRegStar, FaStar } from 'react-icons/fa'
import { MdDragHandle } from 'react-icons/md'

// React DnD-Kit Imports
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

// Stylesheet Imports
import './todoItem.component.scss'
import { LuPencilLine, LuX, LuCheck } from 'react-icons/lu'

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
    const [title, setTitle] = useState('')
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
                <Editable.Root
                    value={title}
                    onValueChange={(e) => setTitle(e.value)}
                    placeholder={props.title}
                >
                    <Editable.Preview css={{ fontWeight: 'bolder', fontSize: '1.25em' }} />
                    <Editable.Input />
                    <Editable.Control>
                        <Editable.EditTrigger asChild>
                            <IconButton variant="ghost" size="xs">
                                <LuPencilLine />
                            </IconButton>
                        </Editable.EditTrigger>
                        <Editable.CancelTrigger asChild>
                            <IconButton variant="outline" size="xs">
                                <LuX />
                            </IconButton>
                        </Editable.CancelTrigger>
                        <Editable.SubmitTrigger asChild>
                            <IconButton variant="outline" size="xs">
                                <LuCheck />
                            </IconButton>
                        </Editable.SubmitTrigger>
                    </Editable.Control>
                </Editable.Root>
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
