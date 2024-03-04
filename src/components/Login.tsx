// NPM Packages

import axios from "axios";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import { joiResolver } from '@hookform/resolvers/joi';
import { Stack, Input, InputGroup, InputLeftAddon, Text, Button, Checkbox, InputRightAddon } from "@chakra-ui/react";

// Components

import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";

// Configurations
import { loginSchema } from "../schema/schema";

// Static Assets
import background from './../assets/img/background-2.svg'

const Login = (props: any) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(loginSchema),
        defaultValues: {
            email: null,
            password: null
        }
    })    
    const onSubmit = async () => {
        await axios
            .post(`${props.url}/login/`, { email, password })
            .then((response) => {
                console.log(response)
                response.data.authenticated ? navigate("/account") : console.log("Incorrect Credentials")
            })
            .catch(err => console.error(err))
            console.log(errors)
    }
    return (
        <div className="signin-form-section" style={{ backgroundImage: `url(${background})` }}>
            <NavBar />
            <div className="signin-form-container">
                <form className="signin-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <Stack>
                        <Text fontSize="4xl" textAlign="center" >Login</Text>
                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-envelope"></i>
                            </InputLeftAddon>
                            <Input {...register('email')} type="text" name="login_email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </InputGroup>
                        <Text className="login-error-msg">{errors.email?.message}</Text>
                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-key"></i>
                            </InputLeftAddon>
                            <Input {...register('password')} type={showPassword ? 'text' : 'password'} name="login_password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }} onClick={() => setShowPassword(!showPassword)}>
                                <i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text className="login-error-msg" >Passwords doesnt Match</Text>
                        <Checkbox name="remember" colorScheme="orange">Remember Me</Checkbox>
                        <Text fontSize="md" textAlign="center">
                            Forgot Password?
                            <Link style={{ color: "darkorange", fontWeight: "bold", fontSize: "18px", marginLeft: "10px" }} to="/forgot-password">Reset</Link>
                        </Text>
                        <Button type="submit">Login</Button>
                    </Stack>
                </form>
            </div>
            <Footer />
        </div>
    );
};
export default Login;
