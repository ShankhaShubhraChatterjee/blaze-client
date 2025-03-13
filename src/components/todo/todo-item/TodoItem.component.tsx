// React Imports
import { useState } from 'react'

// Chakra Imports
import {
    Button,
    IconButton,
    Stack,
    Input,
    Editable,
    Box,
} from '@chakra-ui/react'
import { Checkbox } from './../../ui/checkbox'

// React Icon Imports
import {
    FaTrashAlt,
    FaPenAlt,
    FaRegSave,
    FaRegStar,
    FaStar,
} from 'react-icons/fa'

// Stylesheet Imports
import './todoItem.component.scss'

// Root Component (TodoItem)
const TodoItem = (props: any) => {
    const [starred, setStarred] = useState(false)
    const content =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    return (
        <Box
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
                        variant="none"
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
                        <FaRegSave color="lightblue" />
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
                <Editable.Root
                    defaultValue={props.description}
                    className="todo__list--item--content--body"
                >
                    <Editable.Preview />
                    <Editable.Textarea />
                </Editable.Root>
            </div>
            <div className="todo__list--item--content--index">100</div>
        </Box>
    )
}

export default TodoItem
