import { useState } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../configs/schema.config";

import { Stack, Input, Button, Text } from "@chakra-ui/react";
import { Checkbox } from './../../components/ui/checkbox'
import { InputGroup } from './../../components/ui/input-group'
import NavBar from "../../components/navbar/Navbar.component";
import Footer from "../../components/footer/Footer.component";
import Hr from "../../modules/underline/Underline.module";
import GoogleIcon from './../../assets/img/google.png'
import background from './../../assets/img/background-2.svg'
import './register.page.scss';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showRetypePassword, setShowRetypePassword] = useState(false)

    const toggleVisibility1 = () => setShowPassword(!showPassword)
    const toggleVisibility2 = () => setShowRetypePassword(!showRetypePassword)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(registerSchema),
        defaultValues: {
            name: null,
            username: null,
            email: null,
            password: null
        }
    })
    return (
        <>
            <div className="signup-form-section" style={{ backgroundImage: `url('${background}')` }}>
                <NavBar />
                <div className="signin-form-container">
                    <form action="" className="signin-form" method="POST">
                        <Stack>

                            <Text fontSize="4xl" textAlign="center">Register</Text>

                            <InputGroup startElement={<i style={{ fontSize: "24px" }} className="bi bi-person-fill"></i>} endElement={<i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>}>
                                <Input type="text" name="signup_fullname" placeholder="Fullname" />
                            </InputGroup>
                            <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Name Invalid</Text>

                            <InputGroup startElement={<i style={{ fontSize: "24px" }} className="bi bi-person-circle"></i>} endElement={<i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>}>

                                <Input type="text" name="signup_username" placeholder="Username" />

                            </InputGroup>
                            <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Username Invalid</Text>

                            <InputGroup startElement={<i style={{ fontSize: "24px" }} className="bi bi-envelope"></i>} endElement={<i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>}>

                                <Input type="text" name="signup_email" placeholder="Email" />

                            </InputGroup>
                            <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Email Invalid</Text>

                            <InputGroup startElement={<i style={{ fontSize: "24px" }} className="bi bi-key"></i>} endElement={<i onClick={toggleVisibility1} style={{ fontSize: "16px" }} className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>}>

                                <Input type={showPassword ? 'text' : 'password'} name="signup_password" placeholder="Password" />
                            </InputGroup>
                            <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Password Not Valid</Text>

                            <InputGroup startElement={<i style={{ fontSize: "24px" }} className="bi bi-lock"></i>} endElement={<i onClick={toggleVisibility2} style={{ fontSize: "16px" }} className={showRetypePassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>}>

                                <Input name="signup_retype_password" type={showRetypePassword ? 'text' : 'password'} placeholder="Retype Password" />

                            </InputGroup>
                            <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Password Doesnt Match</Text>
                            <Checkbox name="signup_remember">Remember Me</Checkbox>
                            <Button>Register</Button>
                            <Hr color="orange" height={2.5} />
                            <Button colorScheme="orange" type="submit" width="25" height="25">Signup With Google</Button>
                    </Stack>

                </form>
            </div>
        </div >
            <Footer />
        </>
    )
}
export default Register;