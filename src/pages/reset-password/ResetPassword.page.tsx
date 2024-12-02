import './reset-password.page.scss'

import { Input, Text, Button, Stack, Box, InputAddon } from "@chakra-ui/react";
import background from './../../assets/img/background.svg'

import './forgot-password.page.scss';

const ResetPassword = () => {
    return (
        <div>
            <div className="reset-password-container" style={{ backgroundImage: `url(${background})` }}>
                <section className="forgot-password">
                    <form className="forgot-password-form" action="" method="POST">
                        <h1>Forgot Password</h1>
                        <Text fontSize="lg" fontWeight="bold">Email</Text>
                        <Box>
                            <InputAddon>
                                <i className="fa-solid fa-envelope" style={{ color: "orange" }}></i>
                            </InputAddon>
                            <Input type="text" name="reset_password" placeholder="Type New Password ..." />
                        </Box>
                        <Stack align="center" marginTop="10px">
                            <Button width="200px" type="submit">Submit</Button>
                        </Stack>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default ResetPassword;