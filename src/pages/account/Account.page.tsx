// Chakra Imports
import { Link as ChakraLink, Tabs } from "@chakra-ui/react"

// Custom User Imports
import NavBar from '../../components/navbar/Navbar.component'
import AccountIntro from '../../components/account/intro/AccountIntro.component'
import AccountUpdate from '../../components/account/update/AccountUpdate.component'
import PasswordUpdate from '../../components/account/password/AccountPassword.component'
import AccountAdditional from '../../components/account/additional/AccountAdditional.component'
import AccountDelete from '../../components/account/delete/AccountDelete.component'

// React Icons Imports
import { RiEditBoxFill, RiProfileLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { TbPasswordUser } from "react-icons/tb";

// Stylesheet Imports 
import './account.page.scss'

// Root Component (Account)
const Account = () => {

    return (
        <div>
            <NavBar />
            <div className="account__page">
                <Tabs.Root defaultValue="overview" fitted>
                    <Tabs.List>
                        <Tabs.Trigger value="overview">
                            <ChakraLink unstyled href="#" className="account__page--tab--item">
                                <RiProfileLine size={20} />
                                <p>Overview</p>
                            </ChakraLink>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="update">
                            <ChakraLink unstyled href="#" className="account__page--tab--item">
                                <RiEditBoxFill size={20} />
                                <p>Update</p>
                            </ChakraLink>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="change-password">
                            <ChakraLink unstyled href="#" className="account__page--tab--item">
                                <TbPasswordUser size={24} />
                                <p>Change Password</p>
                            </ChakraLink>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="additional">
                            <ChakraLink unstyled href="#" className="account__page--tab--item">
                                <FaPlus size={20} />
                                <p>Additional</p>
                            </ChakraLink>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="delete">
                            <ChakraLink unstyled href="#" className="account__page--tab--item">
                                <CgDanger size={20} />
                                <p>Danger</p>
                            </ChakraLink>
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="overview"><AccountIntro /></Tabs.Content>
                    <Tabs.Content value="update"><AccountUpdate /></Tabs.Content>
                    <Tabs.Content value="change-password"><PasswordUpdate /></Tabs.Content>
                    <Tabs.Content value="additional"><AccountAdditional /></Tabs.Content>
                    <Tabs.Content value="delete"><AccountDelete /></Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
    )
}

export default Account
