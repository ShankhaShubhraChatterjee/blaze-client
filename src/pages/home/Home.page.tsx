// Custom User Component Imports
import NavBar from '../../components/navbar/Navbar.component'
import Footer from '../../components/footer/Footer.component'

// Asset & Images Imports
import BlazeLogo from './../../assets/img/blaze.png'

// Stylesheet Imports
import './home.page.scss'

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div className="home__intro--welcome">
                <section>
                    <h1>
                        Its Time To Finish Your Unfinished Goals{' '}
                        <strong>Blazingly</strong> Fast.
                    </h1>
                </section>
                <section className="home__intro--logo">
                    <img src={BlazeLogo} alt="App Logo" />
                </section>
            </div>

            <Footer />
        </div>
    )
}
export default Home
