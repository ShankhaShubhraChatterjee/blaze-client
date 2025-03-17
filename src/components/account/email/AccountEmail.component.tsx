// Chakra UI Imports
import { Stack, Button, Text, Input, Box } from '@chakra-ui/react';
import { InputGroup } from '../../ui/input-group';
import { PasswordInput } from '../../ui/password-input';

// React Icons Imports
import { FaEnvelope } from 'react-icons/fa6';
import { MdOutlineMailLock } from "react-icons/md";

// Stylesheet Imports
import './account-email.component.scss'

// Root Component (AccountEmail)
const AccountEmail = () => {
    return (
        <div className="account__page--component">
            <form className="account__page--component--item">
                <h2 className="account__page--component--item--header">
                    Update Email
                </h2>
                <Stack width="full">
                    <InputGroup startElement={<FaEnvelope />}>
                        <Input
                            name="account_update_email"
                            placeholder="New Email Address ..."
                            data-testid="account-update-email-input"
                        />
                    </InputGroup>
                    <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        textAlign="right"
                        color="red.500"
                    >
                        Invalid Email
                    </Text>
                    <InputGroup startElement={<MdOutlineMailLock />}>
                        <PasswordInput
                            name="account_change_email_verification_code"
                            placeholder="Enter Verification Code ..."
                            data-testid="account-change-verification-code-input"
                        />
                    </InputGroup>
                    <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        textAlign="right"
                        color="red.500"
                    >
                        Invalid Verification Code
                    </Text>
                    <Box width='150px'>
                        <Button colorPalette='blue' type="submit">Submit</Button>
                    </Box>
                </Stack>
            </form>
        </div>
    )
}

export default AccountEmail;
