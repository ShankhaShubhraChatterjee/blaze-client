import { createSlice } from '@reduxjs/toolkit'

const initialState: object = {
    sidebarVisible: true,
    hideSidebarToggleButton: false,
}

const todoSidebarSlice = createSlice({
    name: 'todoSidebarSlice',
    initialState,
    reducers: {
        autoToggleSidebar: (state: any) => {
            if (window.innerWidth > 768) {
                state.sidebarVisible = true
                state.hideSidebarToggleButton = true
            }
        },
        toggleSideBar: (state: any, action: any) => {
            state.sidebarVisible = action.payload
        },
    },
})
export const { toggleSideBar, autoToggleSidebar } = todoSidebarSlice.actions
export default todoSidebarSlice.reducer
