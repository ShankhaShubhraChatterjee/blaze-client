// React Router Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React Redux Imports

// Custom User Page Imports
import Home from "./pages/home/Home.page";
import Login from "./pages/login/Login.page";
import Register from "./pages/register/Register.page";
import Account from "./pages/account/Account.page";
import Todo from "./pages/todo/Todo.page";
import ErrorPage from "./pages/error/Error.page";
import ResetPassword from "./pages/reset-password/ResetPassword.page";
import ForgotPassword from "./pages/forgot-password/ForgotPassword.page";

// Account Component Imports
import AccountOverview from "./components/account/overview/AccountOverview.component";
import AccountEmail from "./components/account/email/AccountEmail.component";
import AccountUpdate from "./components/account/update/AccountUpdate.component";
import AccountMFA from "./components/account/mfa/AccountMFA.component";
import AccountDelete from "./components/account/delete/AccountDelete.component";
import PasswordUpdate from "./components/account/password/AccountPassword.component";

// Root Component (App)
function App() {
	const statusText = 404;
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index errorElement={<ErrorPage />} element={<Home />} />
				<Route path="/user/todos" element={<Todo />} />
				<Route path="/user/login" element={<Login />} />
				<Route path="/user/register" element={<Register />} />
				<Route path="*" element={<ErrorPage statusText={statusText} />} />
				<Route path="/user/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password" element={<ResetPassword />} />

				<Route path="account/user" element={<Account />}>
					<Route index path="overview" element={<AccountOverview />} />
					<Route path="profile" element={<AccountUpdate />} />
					<Route path="email" element={<AccountEmail />} />
					<Route path="password" element={<PasswordUpdate />} />
					<Route path="mfa" element={<AccountMFA />} />
					<Route path="danger" element={<AccountDelete />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
