import { useState } from 'react';
import { Input, Stack, Button } from "@chakra-ui/react"
import { InputGroup } from './../../ui/input-group'
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
			<InputGroup startElement={<i className="bi bi-unlock-fill" />} endElement={<i onClick={toggleVisibility1} className={showCurrentPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} />}>
				<Input type={showCurrentPassword ? 'text' : 'password'} name='username' placeholder='Current Password' />
			</InputGroup>
			<InputGroup startElement={<i className="bi bi-unlock-fill" />} endElement={<i onClick={toggleVisibility2} className={showNewPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} />}>
				<Input type={showNewPassword ? 'text' : 'password'} name='username' placeholder='Current Password' />
			</InputGroup>
			<InputGroup startElement={<i className="bi bi-unlock-fill" />} endElement={<i onClick={toggleVisibility3} className={showConfirmPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} />}>
				<Input type={showConfirmPassword ? 'text' : 'password'} name='username' placeholder='Current Password' />
			</InputGroup>
			<Button type='submit'>Submit</Button>
			</Stack>
		</div>
		</section>
	)
}
export default PasswordUpdate