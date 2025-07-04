// React Icons Imports
import {
    FaCamera,
    FaEnvelope,
    FaRegUser,
    FaRegUserCircle,
} from 'react-icons/fa'
import {
    FaRegCircleUser,
    FaUpload,
    FaLocationDot,
    FaBriefcase,
} from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import {
    LuGlobe,
    LuPhoneIncoming,
    LuBuilding,
    LuCheck,
    LuPencilLine,
    LuX,
} from 'react-icons/lu'

// Chakra UI Imports
import {
    Avatar,
    Box,
    Button,
    Flex,
    IconButton,
    HStack,
    Card,
    Link as ChakraLink,
    Editable,
} from '@chakra-ui/react'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../../ui/menu'
import {
    FileUploadList,
    FileUploadRoot,
    FileUploadTrigger,
} from '../../ui/file-upload'

// Stylesheet Imports
import './account-overview.component.scss'

// Root Component (AccountOverview)
const AccountOverview = () => {
    const bio =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur soluta consectetur vitae eveniet architecto idreiciendis sapiente maiores? Exercitationemmaxime ducimus perferendis hic? Harum, rem! Praesentium molestias amet recusandae?'

    return (
        <Flex gap={4} className="account__overview">
            <Box className="account__overview--user" width="full">
                <h2 className="account__overview--header">Profile Account</h2>
                <div className="account__overview--profile">
                    <Card.Root maxW="2xl" overflow="hidden" variant="elevated">
                        <Card.Body
                            gap="2"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Box className="account__overview--profile--image">
                                {/* <img
                                    width="150px"
                                    height="150px"
                                    src={ProfilePicture}
                                    alt="Account Profile Image"
                                /> */}
                                <Avatar.Root width="150px" height="150px">
                                    <Avatar.Fallback
                                        fontSize={24}
                                        name="Foster Z"
                                    />
                                    <Avatar.Image />
                                </Avatar.Root>
                                <Box className="account__overview--profile--button">
                                    <MenuRoot
                                        size="sm"
                                        positioning={{
                                            placement: 'left-start',
                                        }}
                                    >
                                        <MenuTrigger asChild>
                                            <IconButton
                                                size="sm"
                                                rounded="full"
                                            >
                                                <FaCamera />
                                            </IconButton>
                                        </MenuTrigger>
                                        <MenuContent rounded="md">
                                            <MenuItem
                                                value="new-txt"
                                                rounded="lg"
                                            >
                                                <FileUploadRoot>
                                                    <FileUploadTrigger asChild>
                                                        <Button
                                                            width="full"
                                                            variant="plain"
                                                            size="sm"
                                                        >
                                                            <FaUpload />{' '}
                                                            <Box
                                                                flex="1"
                                                                textAlign="left"
                                                            >
                                                                From Device
                                                            </Box>
                                                        </Button>
                                                    </FileUploadTrigger>
                                                    <FileUploadList />
                                                </FileUploadRoot>
                                            </MenuItem>
                                            <MenuItem
                                                value="new-file"
                                                rounded="lg"
                                            >
                                                <Button
                                                    variant="plain"
                                                    size="sm"
                                                >
                                                    <MdDelete />{' '}
                                                    <Box flex="1">
                                                        Delete Image
                                                    </Box>
                                                </Button>
                                            </MenuItem>
                                            <MenuItem
                                                value="new-win"
                                                rounded="lg"
                                            >
                                                <Button
                                                    variant="plain"
                                                    size="sm"
                                                >
                                                    <FaRegCircleUser />{' '}
                                                    <Box flex="1">
                                                        Set Default
                                                    </Box>
                                                </Button>
                                            </MenuItem>
                                        </MenuContent>
                                    </MenuRoot>
                                </Box>
                            </Box>
                            <Box width={'full'}>
                                <Editable.Root
                                    defaultValue={bio}
                                    maxWidth="350px"
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <Editable.Preview
                                        minH="150px"
                                        alignItems="center"
                                        flexDirection="column"
                                        width="full"
                                    />
                                    <Editable.Textarea
                                        height="100px"
                                        maxLength={250}
                                    />
                                    <Editable.Control>
                                        <Editable.EditTrigger asChild>
                                            <IconButton
                                                variant="ghost"
                                                size="xs"
                                            >
                                                <LuPencilLine />
                                            </IconButton>
                                        </Editable.EditTrigger>
                                        <Editable.CancelTrigger asChild>
                                            <IconButton
                                                variant="ghost"
                                                size="xs"
                                            >
                                                <LuX />
                                            </IconButton>
                                        </Editable.CancelTrigger>
                                        <Editable.SubmitTrigger asChild>
                                            <IconButton
                                                variant="outline"
                                                size="xs"
                                            >
                                                <LuCheck />
                                            </IconButton>
                                        </Editable.SubmitTrigger>
                                    </Editable.Control>
                                </Editable.Root>
                            </Box>
                            <Card.Body>
                                <HStack marginBottom="1">
                                    <FaRegUser /> Shakhalo Wintergreen
                                </HStack>
                                <HStack marginBottom="1">
                                    <FaRegUserCircle /> @shakhalo1231_cool
                                </HStack>
                                <HStack marginBottom="1">
                                    <FaEnvelope />
                                    somethingcrazy912312123@gmail.com
                                </HStack>
                                <HStack marginBottom="1">
                                    <ChakraLink href="#">
                                        <LuGlobe /> www.personal.website.app
                                    </ChakraLink>
                                </HStack>
                                <HStack marginBottom="1">
                                    <LuPhoneIncoming /> 123-456-7890
                                </HStack>
                                <HStack marginBottom="1">
                                    <FaLocationDot /> Nevada, USA
                                </HStack>
                                <HStack marginBottom="1">
                                    <FaBriefcase /> Senior Software Developer
                                </HStack>
                                <HStack marginBottom="1">
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

export default AccountOverview
