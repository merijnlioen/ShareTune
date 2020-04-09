import React from 'react'
import Logo from './logo'
import Signout from '../forms/signout'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    isMobile: state.global.isMobile
})

export const UserHeader = () => (
    <header className="header header--user">
        <Logo />
        <Signout />
    </header>
)

export const GuestHeader = connect(mapStateToProps)(({ isMobile }) => (
    <header className="header header--guest">
        <div className="inner">
            <Link to={'/'}>
                <Logo size={isMobile && 'small'} />
            </Link>
            <nav className="header__nav">
                <NavLink to={'/'} exact className="header__nav__link">Home</NavLink>
                <NavLink to={'/login'} className="header__nav__link">Login</NavLink>
                <NavLink to={'/register'} className="header__nav__link">Register</NavLink>
            </nav>
        </div>
    </header>
))