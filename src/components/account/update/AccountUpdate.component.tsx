// Chakra UI Imports
import { Button, Input, Stack, Textarea, Text, Group, InputAddon } from '@chakra-ui/react'
import { InputGroup } from '../../ui/input-group'

// React Icons Imports
import { FaRegEnvelope, FaUserCircle, FaBook } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'

// Root Component (AccountUpdate)
const AccountUpdate = () => {
    return (
        <div className="account__page--component">
            <form className='account__page--component--item'>
                <h2 className="account__page--component--item--header">Update Details</h2>
                <Stack width='full'>
                    <InputGroup
                        startElement={<BsPersonFill />}
                    >
                        <Input
                            type="text"
                            name="signup_fullname"
                            placeholder="Fullname"
                        />
                    </InputGroup>
                    <Text
                        textAlign="right"
                        fontSize="sm"
                        fontWeight="semibold"
                        color='red.500'
                    >
                        Name Invalid
                    </Text>
                    <InputGroup startElement={<FaUserCircle />}>

                        <Input
                            type="text"
                            name="signup_username"
                            placeholder="Username"
                        />

                    </InputGroup>
                    <Text
                        textAlign="right"
                        fontSize="sm"
                        fontWeight="semibold"
                        color='red.500'
                    >
                        Username invalid
                    </Text>

                    <InputGroup
                        flex="5"
                        startElement={<FaRegEnvelope />}>
                        <Input
                            type="text"
                            name="account_update_email"
                            placeholder="Email"
                            data-testid="account-update-email-"
                        />
                    </InputGroup>
                    <Text fontSize="sm" fontWeight='semibold' textAlign='right' color='red.500'>
                        Invalid Email
                    </Text>
                    <Group attached>
                        <InputAddon><FaBook /></InputAddon>
                        <Textarea
                            size="md"
                            rows={3}
                            name="account_update_bio"
                            placeholder="Update Bio ..."
                        ></Textarea>
                    </Group>
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </div>
    )
}

export default AccountUpdate
