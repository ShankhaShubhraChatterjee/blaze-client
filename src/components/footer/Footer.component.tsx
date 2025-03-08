// React Icons Imports
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";


import './footer.component.scss'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className='footer'>
            <div className="footer__social">
                <a href="#" className="footer__social--item"><FaFacebook size={24} /></a>
                <a href="#" className="footer__social--item"><FaInstagram size={24} /></a>
                <a href="#" className="footer__social--item"><FaXTwitter size={24} /></a>
            </div>
            <p className="footer__copyright">&copy; Copyright {date}, Foster Z</p>
        </footer>
    )
}

export default Footer
