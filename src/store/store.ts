import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./../features/uiSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
	reducer:{
		uiSlice: uiSlice,
		authSlice: authSlice
	}
})