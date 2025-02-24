import NavBar from '../../components/navbar/Navbar.component'

import AccountIntro from '../../components/account/intro/AccountIntro.component'
import AccountUpdate from '../../components/account/update/AccountUpdate.component'
import PasswordUpdate from '../../components/account/password/AccountPassword.component'
import AccountAdditional from '../../components/account/additional/AccountAdditional.component'
import AccountDelete from '../../components/account/delete/AccountDelete.component'

import './account.page.scss'

const Account = () => {
    return (
        <div>
            <NavBar />
            <div className="account-page">
                <AccountIntro />
                <AccountUpdate />
                <PasswordUpdate />
                <AccountAdditional />
                <AccountDelete />
            </div>
        </div>
    )
}
export default Account
