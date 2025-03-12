// React Icons Imports
import { FaCamera, FaEnvelope, FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { FaRegCircleUser, FaUpload, FaLocationDot, FaBriefcase } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { LuGlobe, LuPhoneIncoming, LuBuilding } from 'react-icons/lu'

// Chakra UI Imports
import { Box, Button, Flex, IconButton, HStack, Card, Link as ChakraLink } from '@chakra-ui/react'
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger
} from './../../ui/menu';
import {
    FileUploadList,
    FileUploadRoot,
    FileUploadTrigger,
} from './../../ui/file-upload'

// Asset & Image Imports
import ProfilePicture from './../../../assets/img/user.png'

// Stylesheet Imports
import './account-intro.component.scss'

// Root Component (AccountIntro)
const AccountIntro = () => {
    return (
        <Flex gap={4} className="account__intro">
            <Box
                className="account__intro--user"
                background='blackAlpha.200'
                width='full'
            >

                <h2 className="account__intro--header">Profile Account</h2>
                <div className="account__intro--profile">
                    <Card.Root maxW="2xl" overflow="hidden" variant='elevated'>
                        <Card.Body gap="2" display='flex' alignItems='center' justifyContent='center'>

                            <div className="account__intro--profile--image">
                                <img width='150px' height='150px' src={ProfilePicture} alt="Account Profile Image" />
                                <div className="account__intro--profile--button">
                                    <MenuRoot size='sm' positioning={{ placement: "left-start" }}>
                                        <MenuTrigger asChild>
                                            <IconButton size='sm' rounded='full'><FaCamera /></IconButton>
                                        </MenuTrigger>
                                        <MenuContent rounded='md'>
                                            <MenuItem value="new-txt" rounded='lg'>
                                                <FileUploadRoot>
                                                    <FileUploadTrigger asChild>
                                                        <Button width='full' variant='plain' size="sm">
                                                            <FaUpload /> <Box flex="1" textAlign='left'>From Device</Box>
                                                        </Button>
                                                    </FileUploadTrigger>
                                                    <FileUploadList />
                                                </FileUploadRoot>
                                            </MenuItem>
                                            <MenuItem value="new-file" rounded='lg'>
                                                <Button variant='plain' size="sm">
                                                    <MdDelete /> <Box flex="1">Delete Image</Box>
                                                </Button>
                                            </MenuItem>
                                            <MenuItem value="new-win" rounded='lg'>
                                                <Button variant='plain' size="sm">
                                                    <FaRegCircleUser /> <Box flex="1">Set Default</Box>
                                                </Button>
                                            </MenuItem>
                                        </MenuContent>
                                    </MenuRoot>
                                </div>

                            </div>
                            <Card.Description>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur soluta consectetur vitae eveniet architecto id reiciendis sapiente maiores? Exercitationem maxime ducimus perferendis hic? Harum, rem! Praesentium molestias amet recusandae?
                            </Card.Description>
                            <Card.Body>
                                <HStack marginBottom='1'>
                                    <FaRegUser /> Shakhalo Wintergreen
                                </HStack>
                                <HStack marginBottom='1'>
                                    <FaRegUserCircle /> @shakhalo1231_cool
                                </HStack>
                                <HStack marginBottom='1'>
                                    <FaEnvelope /> somethingcrazy912312123@gmail.com
                                </HStack>
                                <HStack marginBottom='1'>
                                    <ChakraLink href="#">
                                        <LuGlobe /> www.personal.website.app
                                    </ChakraLink>
                                </HStack>
                                <HStack marginBottom='1'>
                                    <LuPhoneIncoming /> 123-456-7890
                                </HStack>
                                <HStack marginBottom='1'>
                                    <FaLocationDot /> Nevada, USA
                                </HStack>
                                <HStack marginBottom='1'>
                                    <FaBriefcase /> Senior Software Developer
                                </HStack>
                                <HStack marginBottom='1'>
                                    <LuBuilding /> Google. Inc
                                </HStack>
                            </Card.Body>
                        </Card.Body>
                    </Card.Root>
                </div>

            </Box>
        </Flex>
    )
}

export default AccountIntro
