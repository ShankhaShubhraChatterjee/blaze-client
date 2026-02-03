// React Imports
// import { useState } from 'react'

// User Component Imports
import NavBar from "../../components/navbar/Navbar.component";
import Footer from "../../components/footer/Footer.component";
import Hr from "../../modules/underline/Underline.module";

// Joi Imports
import { joiResolver } from "@hookform/resolvers/joi";

// React Hook Form Imports
import { useForm } from "react-hook-form";

// Root URL
import { rootURL } from "../../configs/server.config";

// Stylesheet Imports
import "./register.page.scss";

// User Configuration Imports
import { registerSchema } from "../../configs/schema.config";

// Chakra Imports
import { Stack, Input, Button, Text } from "@chakra-ui/react";
import { Checkbox } from "./../../components/ui/checkbox";
import { InputGroup } from "./../../components/ui/input-group";
import { PasswordInput } from "../../components/ui/password-input";

// React Icon Imports
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

// User Type Definitions

type RegisterForm = {
	register_fullname: string;
	register_username: string;
	register_email: string;
	register_password: string;
	register_retype_password: string;
};

const Register = () => {
	const { register, handleSubmit } = useForm<RegisterForm>({
		resolver: joiResolver(registerSchema),
	});
	const onSubmit = async (data: RegisterForm) => {
		console.log("Registered");
	};
	return (
		<>
			<div className="register">
				<NavBar />
				<div className="register__form--container">
					<form
						action=""
						className="register__form"
						method="POST"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Stack width={"full"}>
							<Text fontSize="4xl" textAlign="center">
								Register
							</Text>

							<InputGroup startElement={<BsPersonFill />}>
								<Input
									type="text"
									placeholder="Fullname"
									{...register("register_fullname")}
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
									placeholder="Username"
									{...register("register_username")}
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
									placeholder="Email"
									{...register("register_email")}
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
									placeholder="Password"
									{...register("register_password")}
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
									placeholder="Retype Password"
									{...register("register_retype_password")}
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
							<Checkbox name="signup_remember" colorPalette="blue">
								Remember Me
							</Checkbox>
							<Button colorPalette="blue" type="submit">
								Register
							</Button>
							<Hr color="orange" height={2.5} />
							<Button
								colorPalette="orange"
								type="button"
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
	);
};
export default Register;
