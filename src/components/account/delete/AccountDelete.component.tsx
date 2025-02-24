import {
    Button,
    Stack
} from '@chakra-ui/react';
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTitle,
    PopoverTrigger,
} from './../../ui/popover'
import { useState } from 'react';
const AccountDelete = () => {
    const [open, setOpen] = useState(false)
    return (

        <section className="account-operation account-window">
            <h2 className='account-window-headers'>Danger Zone</h2>
            <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                <PopoverTrigger>
                    <Button width="100%" colorScheme="orange" size="lg">Delete Account</Button>
                </PopoverTrigger>
                <PopoverContent maxWidth="100%">
                    <PopoverArrow />
                    <PopoverBody>
                    <PopoverTitle fontWeight="medium">Delete Account ? No Going Back!</PopoverTitle>
                        <Stack width="100%" direction="row" style={{ display: "flex", justifyContent: "center" }}>
                            <Button width="50%" colorScheme="red">Yes</Button>
                            <Button width="50%" colorScheme="blue">Cancel</Button>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </PopoverRoot>
            <Popover isLazy>
                <Stack direction="row" align="center" spacing={0} className='input-section'>

                </Stack>
                <PopoverContent >
                    
                    <PopoverArrow />
                    <PopoverCloseButton />

                </PopoverContent>
            </Popover>

        </section>
    )
}
export default AccountDelete