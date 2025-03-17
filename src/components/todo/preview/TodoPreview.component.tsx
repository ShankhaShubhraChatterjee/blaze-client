// React Imports

// Chakra UI Imports
import { Box, Button, CloseButton, Drawer, Portal } from '@chakra-ui/react'

// Custom User Component Imports
import TodoItem from '../todo-item/TodoItem.component'

// Stylesheet Imports
import './todo-preview.component.scss'

// Temporary Data Imports
import { todos } from '../../../../tmp/data/data'

// Root Component (TodoPreview)
const TodoPreview = () => {
    return (
        <div className="todo__preview--container">
            <Box shadow="md" className="todo__preview--header">
                Todos / Objectives
            </Box>
            <ul className="todo__preview--list">
                <Drawer.Root>
                    <Drawer.Trigger asChild>
                        <Button variant="outline" size="sm">
                            Open Drawer
                        </Button>
                    </Drawer.Trigger>
                    <Portal>
                        <Drawer.Backdrop />
                        <Drawer.Positioner>
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Drawer.Title>Drawer Title</Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </Drawer.Body>
                                <Drawer.Footer>
                                    <Button>Save</Button>
                                </Drawer.Footer>
                                <Drawer.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Drawer.CloseTrigger>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
                {todos.map((todo: any, index: number) => {
                    return (
                        <TodoItem
                            key={index}
                            title={todo.title}
                            description={todo.description}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
export default TodoPreview
