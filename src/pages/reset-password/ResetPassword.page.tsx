import './reset-password.page.scss'

import { Input, Text, Button, Stack } from '@chakra-ui/react'

import './reset-password.page.scss'
import { InputGroup } from '../../components/ui/input-group'
import { RiLockPasswordFill } from 'react-icons/ri'
import { PasswordInput } from '../../components/ui/password-input'

const ResetPassword = () => {
    return (
        <div className="reset__password--container">
            <form
                className="reset__password--container--form"
                action=""
                method="POST"
            >
                <h1 className="reset__password--title">Reset Password</h1>
                <InputGroup startElement={<RiLockPasswordFill />}>
                    <PasswordInput
                        name="reset__password__new"
                        placeholder="New Password ..."
                        data-testid="reset-password-new-password-input"
                    />
                </InputGroup>
                <Text
                    color="red.500"
                    marginBottom={1}
                    marginTop={1}
                    fontWeight={'bold'}
                    fontSize="xs"
                    textAlign='right'
                    className="login-error-msg"
                >
                    Invalid Password
                </Text>
                <InputGroup startElement={<RiLockPasswordFill />}>
                    <PasswordInput
                        name="reset__password__confirm"
                        placeholder="Confirm Password ..."
                        data-testid="reset-password-confirm-password-input"
                    />
                </InputGroup>
                <Text
                    color="red.500"
                    marginBottom={5}
                    marginTop={1}
                    fontWeight={'bold'}
                    fontSize="xs"
                    textAlign='right'
                    className="login-error-msg"
                >
                    Passwords Do Not Match
                </Text>
                <Stack align="center" marginTop="10px">
                    <Button
                        width="200px"
                        marginTop="10px"
                        type="submit"
                        colorPalette="blue"
                    >
                        Reset Password
                    </Button>
                </Stack>
            </form>
        </div>
    )
}
export default ResetPassword
