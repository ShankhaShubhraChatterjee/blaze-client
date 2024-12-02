import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    Textarea
} from '@chakra-ui/react';

const AccountUpdate = () => {
    
    return (
        <section className="account-update account-window">
            <h2 className='account-window-headers'>Update Details</h2>
            <div>
                <Stack className='input-section'>
                    <InputGroup>
                        <InputLeftAddon>
                            <i style={{ marginLeft: "2px" }} className="fa-solid fa-user-secret"></i>
                        </InputLeftAddon>
                        <Input type='text' name='username' placeholder='Full Name' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <i className="fa-solid fa-user-circle"></i>
                        </InputLeftAddon>
                        <Input type='text' name='username' placeholder='Username' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <i className='fa-solid fa-envelope'></i>
                        </InputLeftAddon>
                        <Input type='text' name='username' placeholder='Email' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <i className="bi bi-journal-richtext"></i>
                        </InputLeftAddon>
                        <Textarea size="md" borderRadius="0 7px 7px 0" rows={3} name='bio' placeholder='Bio'></Textarea>
                    </InputGroup>
                    <Button type='submit'>Submit</Button>
                </Stack>
            </div>
        </section>
    )
}

export default AccountUpdate;