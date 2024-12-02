import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack
} from '@chakra-ui/react';

const AccountAdditional = () => {
    return (
        <form className="account-additionals account-window">
            <h2 className='account-window-headers'>Additionals</h2>
            <Stack className='input-section'>

                <InputGroup>
                    <InputLeftAddon>
                        <i className="fa-solid fa-globe"></i>
                    </InputLeftAddon>
                    <Input type='text' name='website' placeholder='Website' />
                </InputGroup>

                <InputGroup>
                    <InputLeftAddon>
                        <i className='fa-solid fa-phone'></i>
                    </InputLeftAddon>
                    <Input type='text' name='phone' placeholder='Phone Number' />
                </InputGroup>

                <InputGroup>
                    <InputLeftAddon>
                        <i className='fa-solid fa-location'></i>
                    </InputLeftAddon>
                    <Input type='text' name='location' placeholder='Location' />
                </InputGroup>

                <InputGroup>
                    <InputLeftAddon>
                        <i className="fa-solid fa-briefcase"></i>
                    </InputLeftAddon>
                    <Input type='text' name='profession' placeholder='Profession' />
                </InputGroup>

                <InputGroup>
                    <InputLeftAddon>
                        <i className="bi bi-buildings-fill"></i>
                    </InputLeftAddon>
                    <Input type='text' name='company' placeholder='Company Name' />
                </InputGroup>

                <Button type='submit'>Submit</Button>
            </Stack>
        </form>
    )
}
export default AccountAdditional