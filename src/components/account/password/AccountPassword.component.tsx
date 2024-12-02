import { useState } from 'react';
import { InputGroup, InputRightAddon, InputLeftAddon, Input, Stack, Button } from "@chakra-ui/react"

const PasswordUpdate = () => {
	const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const toggleVisibility1 = () => setShowCurrentPassword(!showCurrentPassword)
    const toggleVisibility2 = () => setShowNewPassword(!showNewPassword)
    const toggleVisibility3 = () => setShowConfirmPassword(!showConfirmPassword)
	return (
		<section className="account-password account-window">
		<div>
		<h2 className='account-window-headers'>Update Password</h2>
		<Stack className='input-section'>
			<InputGroup>
				<InputLeftAddon>
					<i className="bi bi-unlock-fill"></i>
				</InputLeftAddon>
				<Input type={showCurrentPassword ? 'text' : 'password'} name='username' placeholder='Current Password' />
				<InputRightAddon onClick={toggleVisibility1} className="password-eye-button">
					<i className={showCurrentPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
				</InputRightAddon>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon>
					<i className="bi bi-key"></i>
				</InputLeftAddon>
				<Input type={showNewPassword ? 'text' : 'password'} name='username' placeholder='New Password' />
				<InputRightAddon onClick={toggleVisibility2} className="password-eye-button">
					<i className={showNewPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
				</InputRightAddon>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon>
					<i className="bi bi-lock-fill"></i>
				</InputLeftAddon>
				<Input type={showConfirmPassword ? 'text' : 'password'} name='username' placeholder='Confirm Password' />
				<InputRightAddon onClick={toggleVisibility3} className="password-eye-button">
					<i className={showConfirmPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
				</InputRightAddon>
			</InputGroup>
			<Button type='submit'>Submit</Button>
			</Stack>
		</div>
		</section>
	)
}
export default PasswordUpdate