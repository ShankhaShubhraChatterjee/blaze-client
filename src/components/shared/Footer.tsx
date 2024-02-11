
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer>
            <div className="social-accounts-container">
                <section className="social-accounts">
                    <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </section>
            </div>
            <p className="footer-text">&copy;Copyright {date}, Foster Z</p>
        </footer>
    )
}

export default Footer;