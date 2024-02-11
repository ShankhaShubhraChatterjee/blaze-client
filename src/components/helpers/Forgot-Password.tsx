import { Input, Text, Button, Stack, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import background from './../../assets/img/background.svg'

const ForgotPassword = () => {
    return (
        <div>
            <div className="forgot-password-container" style={{backgroundImage: `url(${background})`}}>
                <section className="forgot-password">
                    <form className="forgot-password-form" action="" method="POST">
                        <h1>Forgot Password</h1>
                        <Text fontSize="lg" fontWeight="bold">Email</Text>
                        <InputGroup>
                        <InputLeftAddon>
                            <i className="fa-solid fa-envelope" style={{color:"teal"}}></i>
                        </InputLeftAddon>
                        <Input type="text" name="forgot_password" placeholder="Email Address" />
                        </InputGroup>
                        <Stack align="center" marginTop="10px">
                            <Button width="200px" type="submit">Submit</Button>
                        </Stack>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default ForgotPassword;