import { useRef } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import ThemeSwitch from '../../modules/theme-switch/ThemeSwitch.module'
import { NavLink } from 'react-router-dom'
import Logo from './../../assets/img/blaze.png'
import ProfilePicture from './../../assets/img/user.png'

import './navbar.component.scss'

const NavBar = () => {
    const Navbar: any = useRef(null);
    const navMenuIcon: any = useRef(null)
    const toggleNavbar = (e: any) => {
        navMenuIcon.current.classList.contains("fa-bars") ? 
        navMenuIcon.current.className = "fa-solid fa-xmark":
        navMenuIcon.current.className = "fa-solid fa-bars"
        Navbar.current.classList.toggle("transit-navbar-height")
    }
    return (
        <nav className="navbar" ref={Navbar}>
            <section className="navbar-header">
                <NavLink to="/" className="home-link">
                    <img src={Logo} alt="Blaze Logo" className="nav-logo" />
                    <h1 className="nav-title">Blaze</h1>
                </NavLink>
                <Stack className='nav-theme-switch'>
                    <ThemeSwitch name="theme-switch-1" id="theme-switch-1" />
                </Stack>


            </section>
            <ul className="nav-link-container">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/todos">Todos</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li className='theme-nav-item'>
                    <span>Appearance: </span>
                    <ThemeSwitch name="theme-switch-2" id="theme-switch-2" />
                </li>
            </ul>
            <section className="nav-button-container">
                <Button
                    colorScheme="none"
                    className="chakra-btn nav-profile-btn"
                >
                    <NavLink to="/account">
                        <img
                            className="profile-image"
                            src={ProfilePicture}
                            alt="Profile Picture Placeholder"
                        />
                    </NavLink>

                </Button>
                <Button onClick={toggleNavbar} colorScheme="white" variant="outline" className="chakra-btn nav-menu-btn">
                    <i className="fa-solid fa-bars" ref={navMenuIcon}></i>
                </Button>
            </section>
        </nav>
    )
}
export default NavBar
