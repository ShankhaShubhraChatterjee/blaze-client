import { Box, Button, Stack, Text } from '@chakra-ui/react'
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTitle,
    PopoverTrigger,
} from './../../ui/popover'

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
                    <PopoverTrigger width="50%" size="lg">
                        
                        <Text padding='2.5' borderRadius='2.5px' width='100' color='white' backgroundColor="orange" textAlign='center' >Delete Account</Text>
                        
                    </PopoverTrigger>
                    </Box>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                            <PopoverTitle fontWeight="medium">
                                Delete Account ? No Going Back!
                            </PopoverTitle>

                            <Stack
                                width='full'
                                direction="row"
                            >
                                <Button colorPalette="red">
                                    I Want To Delete
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
