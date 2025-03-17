// React Imports
import { useState } from 'react'

// React Router Imports
import { NavLink } from 'react-router-dom'

// Chakra Imports
import { Avatar, Box, Button, Dialog, Portal } from '@chakra-ui/react'
import { ColorModeButton } from './../ui/color-mode'
import { CloseButton } from '../ui/close-button'

// React Icon Imports
import { FaHamburger } from 'react-icons/fa'

// Image & Assets Imports
import Logo from './../../assets/img/blaze.svg'
import ProfilePicture from './../../assets/img/user.png'

// Stylesheet Imports
import './navbar.component.scss'

// Root Component (Navbar)
const NavBar = () => {
    return (
        <nav className="navbar">
            <section className="navbar__header">
                <NavLink to="/" className="navbar__header--title">
                    <img src={Logo} alt="Blaze Logo" />
                    <h1>Blaze</h1>
                </NavLink>
            </section>
            <Box as="ul" className="navbar__list">
                <li className="navbar__list--item">
                    <NavLink className="navbar__list--item--link" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="navbar__list--item">
                    <NavLink className="navbar__list--item--link" to="/todos">
                        Todos
                    </NavLink>
                </li>
                <li className="navbar__list--item">
                    <NavLink className="navbar__list--item--link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="navbar__list--item">
                    <NavLink
                        className="navbar__list--item--link"
                        to="/register"
                    >
                        Register
                    </NavLink>
                </li>
            </Box>

            <section className="navbar__profile">
                <ColorModeButton
                    color={{ base: 'yellow.300', _dark: 'blue.300' }}
                    size="md"
                    colorScheme="orange"
                    rounded="full"
                    variant="solid"
                    bg={{ base: 'yellow.700', _dark: 'blue.900' }}
                />
                <NavLink to="/account">
                    <Avatar.Root
                        bg={{
                            base: 'colorPalette.50',
                            _hover: 'colorPalette.100',
                        }}
                    >
                        <Avatar.Fallback name="Profile Picture" />
                        <Avatar.Image src={ProfilePicture} />
                    </Avatar.Root>
                </NavLink>

                <Dialog.Root placement={'center'}>
                    <Dialog.Trigger asChild>
                        <Button
                            className="navbar__list--mobile--button"
                            padding={0}
                            rounded="full"
                            variant="solid"
                            colorPalette="purple"
                            textAlign={'center'}
                        >
                            <FaHamburger />
                        </Button>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content style={{ width: '250px' }}>
                                <Dialog.Header>
                                    <Dialog.Title textAlign={'center'}>
                                        Navigate
                                    </Dialog.Title>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <NavLink
                                        className="navbar__list--item--link--mobile"
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        className="navbar__list--item--link--mobile"
                                        to="/todos"
                                    >
                                        Todos
                                    </NavLink>
                                    <NavLink
                                        className="navbar__list--item--link--mobile"
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        className="navbar__list--item--link--mobile"
                                        to="/register"
                                    >
                                        Register
                                    </NavLink>
                                </Dialog.Body>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
            </section>
        </nav>
    )
}
export default NavBar
