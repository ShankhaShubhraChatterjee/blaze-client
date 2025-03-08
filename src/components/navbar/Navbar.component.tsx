// React Imports
import { useRef, useState } from 'react'

// React Router Imports
import { NavLink } from 'react-router-dom'

// Chakra Imports
import { Avatar, Button, Stack } from '@chakra-ui/react'
import { ColorModeButton } from './../ui/color-mode'

// React Icon Imports
import { LuMenu } from "react-icons/lu";
import { FaHamburger } from 'react-icons/fa';
// Image & Assets Imports
import Logo from './../../assets/img/blaze.png'
import ProfilePicture from './../../assets/img/user.png'

// Stylesheet Imports
import './navbar.component.scss'

// Root Component (Navbar)
const NavBar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className="navbar">
            <section className="navbar__header">
                <NavLink to="/" className="navbar__header--title">
                    <img src={Logo} alt="Blaze Logo" />
                    <h1>Blaze</h1>
                </NavLink>
            </section>
            <ul className="navbar__list">
                <li className='navbar__list--item'>
                    <NavLink className='navbar__list--item--link' to="/">Home</NavLink>
                </li>
                <li className='navbar__list--item'>
                    <NavLink className='navbar__list--item--link' to="/todos">Todos</NavLink>
                </li>
                <li className='navbar__list--item'>
                    <NavLink className='navbar__list--item--link' to="/login">Login</NavLink>
                </li>
                <li className='navbar__list--item'>
                    <NavLink className='navbar__list--item--link' to="/register">Register</NavLink>
                </li>
            </ul>
            <section className="navbar__profile">
                <ColorModeButton color={{base: 'yellow.300', _dark: 'blue.300'}} size="md" colorScheme="orange" rounded="full" variant="solid" bg={{base: 'yellow.700', _dark: 'blue.900'}} />
                <NavLink to="/account">
                    <Avatar.Root bg={{ base: "colorPalette.50", _hover: "colorPalette.100" }}>
                        <Avatar.Fallback name="Profile Picture" />
                        <Avatar.Image src={ProfilePicture} />
                    </Avatar.Root>
                </NavLink>
                <Button padding={0} rounded='full' variant='solid' colorPalette='purple'>
                    <FaHamburger />
                </Button>
            </section>
        </nav>
    )
}
export default NavBar
