// NPM Packages

import { useState } from "react";
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import { joiResolver } from '@hookform/resolvers/joi';
import { Stack, Input, InputGroup, InputLeftAddon, Text, Button, Checkbox, InputRightAddon } from "@chakra-ui/react";

// Components

import Footer from "../../components/footer/Footer.component";
import NavBar from "../../components/navbar/Navbar.component";

// Configurations
import { loginSchema } from "../../configs/schema.config";

// Static Assets
import background from './../../assets/img/background-2.svg'

import './login.page.scss'

const Login = (props: any) => {

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
    const onSubmit = (data: any) => {
        console.log(data)
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
                        <Text size="sm" className="login-error-msg" >{errors.password?.message}</Text>
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
