import { LuGlobe, LuPhoneIncoming, LuBuilding } from 'react-icons/lu'
import { FaLocationDot, FaBriefcase } from 'react-icons/fa6'
import { Button, Input, Stack } from '@chakra-ui/react'
import { InputGroup } from './../../ui/input-group'

const AccountAdditional = () => {
    return (
        <form className="account-additionals account-window">
            <h2 className="account-window-headers">Additionals</h2>
            <Stack className="input-section">
                <InputGroup startElement={<LuGlobe />}>
                    <Input type="text" name="website" placeholder="Website" />
                </InputGroup>

                <InputGroup startElement={<LuPhoneIncoming />}>
                    <Input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                    />
                </InputGroup>

                <InputGroup startElement={<FaLocationDot />}>
                    <Input type="text" name="location" placeholder="Location" />
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

                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    )
}
export default AccountAdditional
