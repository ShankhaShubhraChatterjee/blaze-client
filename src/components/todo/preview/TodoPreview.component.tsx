// React DnD Imports
import { DndContext, closestCorners } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

// Chakra UI Imports
import { Box, Button, CloseButton, Drawer, Editable, IconButton, Portal } from '@chakra-ui/react'

// Custom User Component Imports
import TodoItem from '../todo-item/TodoItem.component'

// Stylesheet Imports
import './todo-preview.component.scss'

// Temporary Data Imports
import { todos } from '../../../../tmp/data/data'
import { Checkbox } from '../../ui/checkbox'
import { LuPencilLine, LuX, LuCheck } from 'react-icons/lu'

// Root Component (TodoPreview)
const TodoPreview = () => {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."

    return (
        <div className="todo__preview--container">
            <Box shadow="md" className="todo__preview--header">
                Todos / Objectives
            </Box>
            <ul className="todo__preview--list">
                <Drawer.Root closeOnInteractOutside={false}>
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

                                    <Checkbox colorPalette='purple' marginBottom={1} />
                                    <Drawer.Title display='flex' alignItems='flex-start'>
                                        <Editable.Root defaultValue="Lorem ipsum dolor sit amet, consectetur sit amet, consectetur adipiscing">
                                            <Editable.Preview />
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
                                    </Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body>
                                    <Editable.Root defaultValue={content}>
                                        <Editable.Preview minH="auto" alignItems="flex-start" width="full" />
                                        <Editable.Textarea minHeight='350px' maxLength={1000} />
                                    </Editable.Root>
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
                <DndContext collisionDetection={closestCorners}>
                    <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                        {todos.map((todo: any, index: number) => {
                            return (

                                <TodoItem
                                    key={index}
                                    id={index}
                                    title={todo.title}
                                    description={todo.description}
                                />

                            )
                        })}
                    </SortableContext>
                </DndContext>
            </ul>
        </div>
    )
}
export default TodoPreview
