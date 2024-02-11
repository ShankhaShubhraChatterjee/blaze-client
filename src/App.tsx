import 
{ 
	BrowserRouter, 
	Routes, 
	Route 
} 
from "react-router-dom";

import NotFound from "./components/helpers/404";
import Forbidden from "./components/helpers/403";
import HomePage from "./components/Home";
import Account from "./components/Account";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import ForgotPassword from "./components/helpers/Forgot-Password";
import CheckEmail from "./components/helpers/Check-Email";
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
					else {
						return(
							<Route path="/account" element={<Forbidden />} />
						)
					}
				})()}
				
				<Route path="/login" element={<Signin url={URL} />} />
				<Route path="/register" element={<Signup />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/forgot-password/check-email" element={<CheckEmail />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
