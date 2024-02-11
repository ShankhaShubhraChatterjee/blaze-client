import NavBar from './shared/NavBar';
import AccountIntro from './account/Account-Intro';
import AccountUpdate from './account/Account-Update';
import PasswordUpdate from './account/Account-Password';
import AccountAdditional from './account/Account-Additional';
import AccountDelete from './account/Account-Delete';

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
export default Account;