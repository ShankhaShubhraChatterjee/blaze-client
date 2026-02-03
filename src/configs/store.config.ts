import { configureStore } from "@reduxjs/toolkit";

import todoSidebarSlice from "../redux/todo-sidebar.slice";
import authSlice from "../redux/auth.slice";
import todoSlice from "../redux/todo.slice";

export const store = configureStore({
	reducer: {
		todoSidebarSlice: todoSidebarSlice,
		authSlice: authSlice,
		todoSlice: todoSlice,
	},
});
