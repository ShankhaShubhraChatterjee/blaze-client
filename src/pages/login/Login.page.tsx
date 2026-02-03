// React Imports
import { useState } from "react";

// React Router Imports
import { Link } from "react-router-dom";

// React Icon Imports
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa6";

// Chakra Imports
import { Stack, Input, Text, Button } from "@chakra-ui/react";
import { PasswordInput } from "../../components/ui/password-input";
import { Checkbox } from "./../../components/ui/checkbox";
import { InputGroup } from "./../../components/ui/input-group";

// React Hook Form Imports
import { useForm } from "react-hook-form";

// Joi Imports
import { joiResolver } from "@hookform/resolvers/joi";

// Stylesheet Imports
import "./login.page.scss";

// User Component Imports
import Footer from "../../components/footer/Footer.component";
import NavBar from "../../components/navbar/Navbar.component";

// User Configuration Imports
import { loginSchema } from "../../configs/schema.config";
import Hr from "../../modules/underline/Underline.module";

import { rootURL } from "../../configs/server.config";

// User Type Definitions
type LoginForm = {
	login_email: string;
	login_password: string;
};

// Root Component(Login)
const Login = () => {
	const [email, setEmail] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>();
	const onSubmit = async (data: LoginForm) => {};
	return (
		<div className="login">
			<NavBar />
			<div className="login__form--container">
				<form
					className="login__form"
					method="POST"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Stack width="full">
						<Text fontSize="4xl" textAlign="center">
							Login
						</Text>
						<InputGroup flex="5" startElement={<FaRegEnvelope />}>
							<Input
								{...register("login_email")}
								type="text"
								placeholder="Email"
								defaultValue={email}
								data-testid="login-form-email-input"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</InputGroup>
						<Text
							fontSize="sm"
							fontWeight="semibold"
							textAlign="right"
							color="red.500"
						>
							{/* {errors.email?.message} */}
						</Text>
						<InputGroup startElement={<RiLockPasswordFill />}>
							<PasswordInput
								{...register("login_password")}
								placeholder="Password"
								data-testid="login-form-password-input"
							/>
						</InputGroup>
						<Text
							fontSize="sm"
							fontWeight="semibold"
							textAlign="right"
							color="red.500"
						>
							{/* {errors.password?.message} */}
						</Text>
						<Checkbox name="remember" colorScheme="orange">
							Remember Me
						</Checkbox>
						<Text fontSize="md" textAlign="center">
							Forgot Password?
							<Link
								style={{
									color: "royalblue",
									fontWeight: "bold",
									fontSize: "18px",
									marginLeft: "10px",
								}}
								to="/user/forgot-password"
							>
								Reset
							</Link>
						</Text>
						<Button
							type="submit"
							data-testid="login-form-submit-button"
							colorPalette="blue"
						>
							Login
						</Button>
						<Hr color="orangse" height={2.5} />
						<Button
							type="submit"
							data-testid="login-form-submit-button"
							colorPalette="orange"
						>
							Login with Google
						</Button>
					</Stack>
				</form>
			</div>
			<Footer />
		</div>
	);
};
export default Login;
