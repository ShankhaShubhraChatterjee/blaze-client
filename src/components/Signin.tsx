import { Stack, Input, InputGroup, InputLeftAddon, Text, Button, Checkbox, InputRightAddon } from "@chakra-ui/react";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";
import Axios from "axios";

import background from './../assets/img/background-2.svg'


const Signin = (props: any) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleVisibility1 = () => setShowPassword(!showPassword)
    const handleLoginSubmit = async (e: any) => {
            const data = await Axios.get(props.url + "/login").then(data => data).catch(err => console.error(err))
            console.log(data)
            return redirect("/login")
    }
    return (
        <div className="signin-form-section" style={{backgroundImage:`url(${background})`}}>
            <NavBar />
            <div className="signin-form-container">
                <form action={props.url + '/login'} className="signin-form" method="POST">
                    <Stack>
                        <Text fontSize="4xl" textAlign="center" >Sign In</Text>
                        <InputGroup>
                            <InputLeftAddon style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                <i style={{ fontSize: "24px" }} className="bi bi-person-circle"></i>
                            </InputLeftAddon>
                            <Input type="text" name="signin_username_email" placeholder="Username or Email" />
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="var(--default-fg-error)">Username or Email Invalid</Text>
                        <InputGroup>
                            <InputLeftAddon style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                <i style={{ fontSize: "24px" }} className="bi bi-key"></i>
                            </InputLeftAddon>
                            <Input type={showPassword ? 'text' : 'password'} name="signin_password" placeholder="Password" />
                            <InputRightAddon style={{paddingLeft:"5px", paddingRight:"5px"}} onClick={toggleVisibility1}>
                                <i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="var(--default-fg-error)">Passwords doesnt Match</Text>
                        <Checkbox name="remember">Remember Me</Checkbox>
                        <Text fontSize="md" textAlign="center">
                            Forgot Password?
                            <Link style={{ color: "darkorange", fontWeight: "bold", fontSize:"18px", marginLeft: "10px" }} to="/forgot-password">Reset</Link>
                        </Text>
                        <Button type="submit" onClick={handleLoginSubmit}>Sign In</Button>
                    </Stack>
                </form>
            </div>
            <Footer />
        </div>
    );
};
export default Signin;
