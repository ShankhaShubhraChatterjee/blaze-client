import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
	sidebarVisible: true,
}

const todoSidebarSlice = createSlice({
	name: 'todoSidebarSlice',
	initialState,
	reducers: {
		showSideBar: (state : any) => {
			if(window.innerWidth < 768) {
				state.sidebarVisible = true;
			}
			else {
				state.sidebarVisible = false;
			}
		},
		toggleSideBar: (state : any, action : any) => {
			state.sidebarVisible = action.payload;
		}
	}
})
export const { showSideBar, toggleSideBar } = todoSidebarSlice.actions;
export default todoSidebarSlice.reducer;