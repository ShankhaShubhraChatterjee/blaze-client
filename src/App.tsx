// React Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// React Redux Imports

// Custom User Page Imports
import Home from './pages/home/Home.page'
import Login from './pages/login/Login.page'
import Register from './pages/register/Register.page'
import Account from './pages/account/Account.page'
import Todo from './pages/todo/Todo.page'
import ErrorPage from './pages/error/Error.page'
import CheckEmail from './pages/check-email/CheckEmail.page'
import ResetPassword from './pages/reset-password/ResetPassword.page'
import ForgotPassword from './pages/forgot-password/ForgotPassword.page'

// User Configuration Imports
import { rootURL } from './configs/server.config'

// Root Component (App)
function App() {
    const URL = `${rootURL}/user/account`
    const statusText = 404
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    index
                    errorElement={<ErrorPage />}
                    element={<Home />}
                />
                <Route path="/user/todos" element={<Todo />} />
                <Route path="/user/login" element={<Login url={URL} />} />
                <Route path="/user/register" element={<Register />} />
                <Route
                    path="*"
                    element={<ErrorPage statusText={statusText} />}
                />
                <Route
                    path="/user/forgot-password"
                    element={<ForgotPassword />}
                />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route
                    path="/forgot-password/check-email"
                    element={<CheckEmail />}
                />
                <Route path="account/user" element={<Account />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App
