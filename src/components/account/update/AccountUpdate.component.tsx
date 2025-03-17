// Chakra UI Imports
import {
    Button,
    Input,
    Stack,
    Text,
    Box
} from '@chakra-ui/react'
import { InputGroup } from '../../ui/input-group'

// React Icons Imports
import { FaUserCircle, FaBriefcase } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { LuBuilding, LuGlobe, LuPhoneIncoming } from 'react-icons/lu'
import { FaLocationDot } from 'react-icons/fa6'

// Root Component (AccountUpdate)
const AccountUpdate = () => {
    return (
        <div className="account__page--component">
            <form className="account__page--component--item">
                <h2 className="account__page--component--item--header">
                    Update Details
                </h2>
                <Stack width="full">
                    <InputGroup startElement={<BsPersonFill />}>
                        <Input
                            type="text"
                            name="account_update_fullname"
                            placeholder="Fullname"
                        />
                    </InputGroup>
                    <Text
                        textAlign="right"
                        fontSize="xs"
                        fontWeight="semibold"
                        color="red.500"
                    >
                        Name Invalid
                    </Text>
                    <InputGroup startElement={<FaUserCircle />}>
                        <Input
                            type="text"
                            name="account_update_username"
                            placeholder="Username"
                        />
                    </InputGroup>
                    <Text
                        textAlign="right"
                        fontSize="xs"
                        fontWeight="semibold"
                        color="red.500"
                    >
                        Username invalid
                    </Text>
                    <InputGroup startElement={<LuGlobe />}>
                        <Input
                            type="text"
                            name="website"
                            placeholder="Website"
                        />
                    </InputGroup>
                    <InputGroup startElement={<LuPhoneIncoming />}>
                        <Input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                        />
                    </InputGroup>

                    <InputGroup startElement={<FaLocationDot />}>
                        <Input
                            type="text"
                            name="location"
                            placeholder="Location"
                        />
                    </InputGroup>

                    <InputGroup startElement={<FaBriefcase />}>
                        <Input
                            type="text"
                            name="profession"
                            placeholder="Profession"
                        />
                    </InputGroup>

                    <InputGroup startElement={<LuBuilding />}>
                        <Input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                        />
                    </InputGroup>
                    <Box width='150px'>
                        <Button colorPalette='blue' type="submit">Submit</Button>
                    </Box>
                </Stack>
            </form>
        </div>
    )
}

export default AccountUpdate
