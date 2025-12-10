// Chakra Imports
import { Input, Button, Stack, Alert } from '@chakra-ui/react'
import { InputGroup } from '../../components/ui/input-group'

// React Icon Imports
import { FaRegEnvelope } from 'react-icons/fa6'
import { FaHome } from 'react-icons/fa'
// Stylesheet Imports
import './forgot-password.page.scss'
import { Link } from 'react-router-dom'

// Root Component (ForgotPassword)
const ForgotPassword = () => {
 
    return (
        <div className="forgot__password--container">
            <Alert.Root maxWidth="600px" status="success">
                <Alert.Indicator />
                <Alert.Title>Password Reset Instructions Sent Successfully, Check Your Email</Alert.Title>
            </Alert.Root>
            <form
                className="forgot__password--container--form"
                action=""
                method="POST"
            >
                <Button rounded="full" color="orange.500">
                    <Link to="/">
                        <FaHome size={24} />
                    </Link>
                </Button>
                <h1 className="forgot__password--title">Forgot Password</h1>
                <InputGroup
                    width="100%"
                    flex="5"
                    startElement={<FaRegEnvelope />}
                >
                    <Input
                        type="email"
                        name="forgot_email"
                        placeholder="Email"
                        data-testid="forgot-password-form-email-input"
                    />
                </InputGroup>
                <Stack align="center" marginTop="10px">
                    <Button width="200px" marginTop="10px" type="submit">
                        Submit
                    </Button>
                </Stack>
            </form>
        </div>
    )
}
export default ForgotPassword
