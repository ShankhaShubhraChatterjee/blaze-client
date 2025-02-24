import {
    Button,
    Input,
    Stack,
    Textarea
} from '@chakra-ui/react';
import { InputGroup } from '../../ui/input-group'
const AccountUpdate = () => {

    return (
        <section className="account-update account-window">
            <h2 className='account-window-headers'>Update Details</h2>
            <div>
                <Stack className='input-section'>
                    <InputGroup startElement={<i style={{ marginLeft: "2px" }} className="fa-solid fa-user-secret"></i>}>
                        <Input type='text' name='username' placeholder='Full Name' />
                    </InputGroup>
                    <InputGroup startElement={<i className="fa-solid fa-user-circle"></i>}>
                        <Input type='text' name='username' placeholder='Username' />
                    </InputGroup>
                    <InputGroup startElement={<i className='fa-solid fa-envelope'></i>}>
                        <Input type='text' name='username' placeholder='Email' />
                    </InputGroup>
                    <InputGroup startElement={<i className="bi bi-journal-richtext"></i>}>
                        <Textarea size="md" borderRadius="0 7px 7px 0" rows={3} name='bio' placeholder='Bio'></Textarea>
                    </InputGroup>
                    <Button type='submit'>Submit</Button>
                </Stack>
            </div>
        </section>
    )
}

export default AccountUpdate;