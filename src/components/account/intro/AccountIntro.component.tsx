import {
    Input,
    Stack,
    Text,
    VStack
} from '@chakra-ui/react';
import ProfilePicture from './../../../assets/img/user.png'
import './account-intro.component.scss'
const AccountIntro = () => {
    return (
        <section className="account-intro account-window">
            <h2 className='account-window-headers'>Info</h2>
            <section className='account-intro-profile-section'>
                <div className='account-intro-profile-image-section'>
                    <div className="account-intro-profile-image">
                        <img src={ProfilePicture} alt="Account Profile Image" />
                        <label htmlFor="account-image-input" className='account-image-input-label'>
                            <i className="bi bi-camera2"></i>
                            <Input type="file" name="account_profile_image" id='account-image-input' />
                        </label>
                    </div>
                </div>
                <Stack direction="column">
                    <VStack>
                        <Text fontSize="md" fontWeight="bold">Full Name</Text>
                        <Text>Foster Z</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="md" fontWeight="bold">Username</Text>
                        <Text>Foster0123</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="md" fontWeight="bold">Email</Text>
                        <Text>somethingspecial6834@gmail.com</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="md" fontWeight="bold">Bio</Text>
                        <Text>Some Bio Here</Text>
                    </VStack>
                </Stack>
            </section>
        </section>
    )
}

export default AccountIntro