// React Imports
import { useState } from 'react'

// User Component Imports
import NavBar from '../../components/navbar/Navbar.component'
import Footer from '../../components/footer/Footer.component'
import Hr from '../../modules/underline/Underline.module'

// Joi Imports
import { joiResolver } from '@hookform/resolvers/joi'

// React Hook Form Imports
import { useForm } from 'react-hook-form'

// Stylesheet Imports
import './register.page.scss'

// User Configuration Imports
import { registerSchema } from '../../configs/schema.config'

// Chakra Imports
import { Stack, Input, Button, Text } from '@chakra-ui/react'
import { Checkbox } from './../../components/ui/checkbox'
import { InputGroup } from './../../components/ui/input-group'
import { PasswordInput } from '../../components/ui/password-input'
import { Field } from '../../components/ui/field'

// React Icon Imports
import { RiLockPasswordFill } from 'react-icons/ri'
import { FaRegEnvelope } from 'react-icons/fa6'
import { FaUserCircle } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'

const Register = () => {
    return (
        <>
            <div className="register">
                <NavBar />
                <div className="register__form--container">
                    <form action="" className="register__form" method="POST">
                        <Stack width={'full'}>
                            <Text fontSize="2xl" textAlign="center">
                                Register
                            </Text>

                            <InputGroup startElement={<BsPersonFill />}>
                                <Input
                                    type="text"
                                    name="signup_fullname"
                                    placeholder="Fullname"
                                />
                            </InputGroup>
                            <Text
                                textAlign="right"
                                fontSize="xs"
                                fontWeight="semibold"
                                color="red.500"
                            >
                                Name Invalid
                            </Text>
                            <InputGroup startElement={<FaUserCircle />}>
                                <Input
                                    type="text"
                                    name="signup_username"
                                    placeholder="Username"
                                />
                            </InputGroup>
                            <Text
                                textAlign="right"
                                fontSize="xs"
                                fontWeight="semibold"
                                color="red.500"
                            >
                                Username invalid
                            </Text>

                            <InputGroup startElement={<FaRegEnvelope />}>
                                <Input
                                    type="text"
                                    name="signup_email"
                                    placeholder="Email"
                                />
                            </InputGroup>
                            <Text
                                textAlign="right"
                                fontSize="xs"
                                fontWeight="semibold"
                                color="red.500"
                            >
                                Email Invalid
                            </Text>

                            <InputGroup startElement={<RiLockPasswordFill />}>
                                <PasswordInput
                                    name="signup_password"
                                    placeholder="Password"
                                />
                            </InputGroup>
                            <Text
                                textAlign="right"
                                fontSize="xs"
                                fontWeight="semibold"
                                color="red.500"
                            >
                                Password Not Valid
                            </Text>

                            <InputGroup startElement={<RiLockPasswordFill />}>
                                <PasswordInput
                                    name="signup_retype_password"
                                    placeholder="Retype Password"
                                />
                            </InputGroup>
                            <Text
                                textAlign="right"
                                fontSize="xs"
                                fontWeight="semibold"
                                color="red.500"
                            >
                                Password Doesnt Match
                            </Text>
                            <Checkbox name="signup_remember" colorPalette='blue'>
                                Remember Me
                            </Checkbox>
                            <Button colorPalette='blue'>Register</Button>
                            <Hr color="orange" height={2.5} />
                            <Button
                                colorPalette="orange"
                                type="submit"
                                width="25"
                                height="25"
                            >
                                Signup With Google
                            </Button>
                        </Stack>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Register
