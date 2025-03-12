import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTitle,
    PopoverTrigger,
} from './../../ui/popover'
import { InputGroup } from './../../ui/input-group'
import { LuUser } from 'react-icons/lu'

// Root Component (AccountDelete)
const AccountDelete = () => {
    return (
        <div className='account__page--component'>
            <form className="account__page--component--item">
                <h2 className="account__page--component--item--header">Delete Account</h2>
                <Stack width='full' textAlign='center' margin={'20px 0'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, dolor? Modi quidem culpa nihil temporibus quo nam aliquam voluptas dolorem ducimus! Possimus ea voluptas officia, fuga incidunt ab dolorum aliquam, qui assumenda illo hic eveniet nesciunt consectetur iste deserunt quis laborum suscipit delectus aliquid itaque perferendis placeat. Eum, impedit aspernatur?
                </Stack>
                <PopoverRoot closeOnInteractOutside>
                    <Box textAlign='center'>
                        <PopoverTrigger width="50%">

                            <Text padding='2.5' borderRadius='2.5px' width='100' color='white' cursor='pointer' backgroundColor="orange" textAlign='center' >I Want To Delete</Text>

                        </PopoverTrigger>
                    </Box>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                            <PopoverTitle fontWeight="bold" color='red.600'>
                                Delete Account ? No Going Back!
                            </PopoverTitle>

                            <Stack
                                width='full'
                                direction="column"
                                marginTop='2'
                            >
                                <InputGroup flex="1" startElement={<LuUser />}>
                                    <Input placeholder="Type Username ..." />
                                </InputGroup>
                                <Button colorPalette="red" width='full'>
                                    Delete Permanently
                                </Button>
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </PopoverRoot>
            </form>
        </div>
    )
}
export default AccountDelete
