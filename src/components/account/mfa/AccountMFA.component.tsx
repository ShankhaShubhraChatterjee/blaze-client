// Chakra UI Imports
import { Stack, Box, QrCode, PinInput, Field, Button } from '@chakra-ui/react'

// Stylesheet Imports
import './account-mfa.component.scss'

// Root Component (AccountMFA)
const AccountMFA = () => {
    return (
        <div className="account__page--component">
            <form
                name="account-mfa-form"
                className="account__page--component--item"
                style={{ width: '300px' }}
            >
                <h2 className="account__page--component--item--header">MFA</h2>
                <Stack textAlign="center">
                    <Box className="account__mfa--qrcode--container">
                        <QrCode.Root value="some secret" size="xl">
                            <QrCode.Frame>
                                <QrCode.Pattern />
                            </QrCode.Frame>
                        </QrCode.Root>
                    </Box>
                    <Field.Root width="full">
                        <Stack>
                            <PinInput.Root
                                otp
                                size="sm"
                                placeholder="*"
                                colorPalette="green"
                                variant="outline"
                            >
                                <Field.Label marginBottom="2">
                                    Enter Code Manually
                                </Field.Label>
                                <PinInput.HiddenInput />
                                <PinInput.Control display={'flex'} gap={4}>
                                    <PinInput.Input index={0} />
                                    <PinInput.Input index={1} />
                                    <PinInput.Input index={2} />
                                    <PinInput.Input index={3} />
                                    <PinInput.Input index={4} />
                                    <PinInput.Input index={5} />
                                </PinInput.Control>
                            </PinInput.Root>
                            <Button colorPalette="blue">Verify Code</Button>
                        </Stack>
                    </Field.Root>
                </Stack>
            </form>
        </div>
    )
}

export default AccountMFA
