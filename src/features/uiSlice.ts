import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
	sidebarVisible: true,
}

const uiSlice = createSlice({
	name: 'uiSlice',
	initialState,
	reducers: {
		showSideBar: (state) => {
			if(window.innerWidth < 768) {
				state.sidebarVisible = true;
			}
			else {
				state.sidebarVisible = false;
			}
		},
		toggleSideBar: (state, action) => {
			state.sidebarVisible = action.payload;
		}
	}
})
export const { showSideBar, toggleSideBar } = uiSlice.actions;
export default uiSlice.reducer;