import 
{ 
	BrowserRouter, 
	Routes, 
	Route 
} 
from "react-router-dom";

import NotFound from "./pages/error/Error.page";
import HomePage from "./pages/home/Home.page";
import Account from "./pages/account/Account.page";
import Login from "./pages/login/Login.page";
import Register from "./pages/register/Register.page";
import Todo from "./pages/todo/Todo.page";
import ForgotPassword from "./pages/forgot-password/ForgotPassword.page";
import CheckEmail from "./pages/check-email/CheckEmail.page";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Axios from 'axios'

function App() {
	const URL = "http://localhost:3000"
	const [ auth, setAuth ] = useState(true);
	let value = useSelector((state: any) => state.authSlice.authenticated)
	// useEffect(() => {
	// 	try {
	// 		Axios.get("http://localhost:3000")
	// 		.then(res => {console.log(res.data.auth);setAuth(res.data.auth)})
	// 		.catch((err) => console.error(err))
	// 	}
	// 	catch (err) {
	// 		console.error(err)
	// 	}
	// }, [])
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index errorElement={<NotFound />} element={<HomePage />} />
				<Route path="/todos" element={<Todo />} />
				{(() => {
					if(auth){
						return(
							<Route path="/account" element={<Account />} />
						)
					}
				})()}
				
				<Route path="/login" element={<Login url={URL} />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/forgot-password/check-email" element={<CheckEmail />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
