// Chakra Imports
import { Tabs, Link as ChakraLink } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { Tooltip } from '../../components/ui/tooltip'

// Custom User Imports
import NavBar from '../../components/navbar/Navbar.component'
import AccountIntro from '../../components/account/overview/AccountOverview.component'
import AccountUpdate from '../../components/account/update/AccountUpdate.component'
import AccountEmail from '../../components/account/email/AccountEmail.component'
import PasswordUpdate from '../../components/account/password/AccountPassword.component'
import AccountDelete from '../../components/account/delete/AccountDelete.component'
import AccountMFA from './../../components/account/mfa/AccountMFA.component'

// React Icons Imports
import { RiEditBoxFill, RiProfileLine } from 'react-icons/ri'
import { FaEnvelope } from 'react-icons/fa'
import { CgDanger } from 'react-icons/cg'
import { TbPasswordUser, TbShieldLock } from 'react-icons/tb'

// Stylesheet Imports
import './account.page.scss'

// Root Component (Account)
const Account = () => {
    const navigate = useNavigate()
    const tabs = [
        { id: 1, title: 'Overview', value: 'overview', url: 'user/overview', icon: <RiProfileLine size={20} /> },
        { id: 2, title: 'Update Profile', value: 'update-profile', url: 'user/update/profile', icon: <RiEditBoxFill size={20} /> },
        { id: 3, title: 'Update Email', value: 'update-email', url: 'user/update/email', icon: <FaEnvelope size={20} /> },
        { id: 4, title: 'Update Password', value: 'update-password', url: 'user/update/password', icon: <TbPasswordUser size={24} /> },
        { id: 5, title: 'MFA', value: 'mfa', url: 'user/mfa', icon: <TbShieldLock size={20} /> },
        { id: 6, title: 'Danger', value: 'danger', url: 'user/danger', icon: <CgDanger size={20} /> },
    ]
    const tabContents = [
        { id: 1, value: 'overview', component: <AccountIntro /> },
        { id: 2, value: 'update-profile', component: <AccountUpdate /> },
        { id: 3, value: 'update-email', component: <AccountEmail /> },
        { id: 4, value: 'update-password', component: <PasswordUpdate /> },
        { id: 5, value: 'mfa', component: <AccountMFA /> },
        { id: 6, value: 'danger', component: <AccountDelete /> },
    ]
    return (
        <div>
            <NavBar />
            <div className="account__page">
                <Tabs.Root defaultValue="overview" navigate={({ value, node }) => navigate(`/${value}`)} fitted>
                    <Tabs.List>
                        {tabs.map((tab) => {
                            return (
                                <Tabs.Trigger value={tab.value} key={tab.id}>
                                    <Tooltip content={tab.title} openDelay={50} closeDelay={50}>
                                        <ChakraLink
                                            href={`/account/${tab.url}`}
                                            className="account__page--tab--item"
                                        >
                                            {tab.icon}
                                            <p>{tab.title}</p>
                                        </ChakraLink>
                                    </Tooltip>
                                </Tabs.Trigger>
                            )
                        })}
                    </Tabs.List>
                    {tabContents.map((tabContent) => {
                        return (
                            <Tabs.Content value={tabContent.value} key={tabContent.id}>
                                {tabContent.component}
                            </Tabs.Content>
                        )
                    })}
                </Tabs.Root>
            </div>
        </div>
    )
}

export default Account