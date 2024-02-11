import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	authenticated: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		switchAuth: (state, action) => {
			state.authenticated = action.payload
		}
	}
})
export const { switchAuth } = authSlice.actions
export default authSlice.reducer;