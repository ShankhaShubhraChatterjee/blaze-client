import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import ErrorPage from './pages/error/Error.page'
import HomePage from './pages/home/Home.page'
import Account from './pages/account/Account.page'
import Login from './pages/login/Login.page'
import Register from './pages/register/Register.page'
import Todo from './pages/todo/Todo.page'
import ForgotPassword from './pages/forgot-password/ForgotPassword.page'
import CheckEmail from './pages/check-email/CheckEmail.page'

import Axios from 'axios'
import { rootURL } from './configs/server.config'
function App() {
    const URL = `${rootURL}/user/account`
    const [auth, setAuth] = useState(false)
    const [status, setStatus] = useState(404)
    const [statusText, setStatusText] = useState('Not Found')
    useEffect(() => {
        try {
            Axios.get(URL)
                .then((res: any) => {
                    setAuth(res.data.auth)
                })
                .catch((err: any) => {
                    setStatus(err.status)
                    setStatusText(err.response.statusText)
                })
        } catch (err) {
            console.error(err)
        }
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    index
                    errorElement={
                        <ErrorPage status={status} statusText={statusText} />
                    }
                    element={<HomePage />}
                />
                <Route path="/todos" element={<Todo />} />
                {(() => {
                    if (auth) {
                        return <Route path="/account" element={<Account />} />
                    }
                })()}

                <Route path="/login" element={<Login url={URL} />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="*"
                    element={
                        <ErrorPage status={status} statusText={statusText} />
                    }
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                    path="/forgot-password/check-email"
                    element={<CheckEmail />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default App
