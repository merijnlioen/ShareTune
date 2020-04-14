import React from 'react'
import Logo from './logo'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withFirebase } from '../../firebase'
import { useHistory } from 'react-router-dom'
import { signOut } from '../../actions/global-actions'

const mapDispatchToProps = dispatch => ({
    signOut: (firebase, history) => dispatch(signOut(firebase, history))
})

const mapStateToProps = state => ({
    user: state.global.user
})

export const UserHeader = connect(mapStateToProps, mapDispatchToProps)(withFirebase(({ firebase, signOut, user }) => {
    const history = useHistory()

    return (
        <header className="header header--user">
            <div className="header__content">
                <Link to={'/'}>
                    <Logo />
                </Link>

                <Link to={`/profile/${user.uid}`}>
                    <img src={user.avatar} className="avatar avatar--small avatar--round" />
                </Link>

                <NavLink to={'/'} exact className="header__nav__link">Home</NavLink>
                <NavLink to={'/settings'} className="header__nav__link">Settings</NavLink>
            </div>
            
            <p className="header__nav__link" 
                onClick={() => signOut(firebase, history)}
            >Logout</p>
        </header>
    )
}))

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