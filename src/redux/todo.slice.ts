import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            title: 'Do Not Do Anything',
            index: 2,
            starred: true,
            checked: false,
            description:
                'Task-1 it seems like this todo is wayy much larger and longer than i expected it to be',
        },
        {
            id: 2,
            index: 3,
            starred: false,
            checked: true,
            title: 'Do Something Crazy As Hell',
            description: 'Task-2 Is Somewhat Smaller Comparatively',
        },
        {
            id: 3,
            index: 4,
            starred: false,
            checked: false,
            title: 'Do Nothing At All',
            description: 'Task 4 Is Biggg !!!',
        },
        {
            id: 4,
            index: 5,
            starred: false,
            checked: false,
            title: 'Do Whatever You Want',
            description: 'Task 5 Is Tiny & Random',
        },
        {
            id: 5,
            index: 1,
            starred: false,
            checked: false,
            title: 'Do Nothing At All',
            description: 'Task 4 Is Biggg !!!',
        },
    ]
}



const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state: any) => {
            state.todos = [...state.todos, {
                id: state.todos.length + 1,
                title: 'Change This Title For Header ...',
                index: state.todos.length + 1,
                starred: false,
                checked: false,
                description: 'Describe Your Task Here Briefly ...',
            }]
        },
        removeTodo: (state: any, action) => {
            state.todos = state.todos.filter((todo: any) => todo.id !== action.payload.id)
            console.log(state.todos)
        },
        sortTodo: (state: any, action) => {
            console.log("Working")
            state.todos = action.payload
        }
    },
})

export const { addTodo, removeTodo, sortTodo } = todoSlice.actions;
export default todoSlice.reducer;