import React from 'react'
import Logo from './logo'
import Signout from '../forms/signout'
import { NavLink, Link } from 'react-router-dom'

export const UserHeader = () => (
    <header className="header header--user">
        <Link to={'/'}>
            <Logo />
        </Link>

        <NavLink to={'/settings'} className="header__nav__link">Settings</NavLink>
        
        <Signout />
    </header>
)

export const GuestHeader = () => (
    <header className="header header--guest">
        <div className="inner">
            <Link to={'/'}>
                <Logo />
            </Link>
            <nav className="header__nav">
                <NavLink to={'/'} exact className="header__nav__link">Home</NavLink>
                <NavLink to={'/login'} className="header__nav__link">Login</NavLink>
                <NavLink to={'/register'} className="header__nav__link">Register</NavLink>
            </nav>
        </div>
    </header>
)