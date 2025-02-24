import { configureStore } from '@reduxjs/toolkit'
import todoSidebarSlice from '../redux/todo-sidebar.slice'
import authSlice from '../redux/auth.slice'

export const store = configureStore({
    reducer: {
        todoSidebarSlice: todoSidebarSlice,
        authSlice: authSlice,
    },
})
