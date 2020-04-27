import React, { useState, useEffect, Fragment } from 'react'
import Logo from './logo'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withFirebase } from '../../firebase'
import { useHistory } from 'react-router-dom'
import { signOut } from '../../actions/global-actions'
import { CSSTransition } from 'react-transition-group'
import { Close, Open } from './icons'
import Avatar from './avatar'

const mapDispatchToProps = dispatch => ({
    signOut: (firebase, history) => dispatch(signOut(firebase, history))
})

const mapStateToProps = state => ({
    user: state.global.user,
    isMobile: state.global.isMobile
})

export const UserHeader = connect(mapStateToProps, mapDispatchToProps)(withFirebase(({ firebase, signOut, user, isMobile }) => {
    const [isHeaderOpen, setHeaderOpen] = useState()
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            setHeaderOpen(true)
        }, 100000000)
    }, [])

    return (
        <Fragment>
            {isMobile && 
                <div className="hamburger__container">
                    <div className="inner">
                        <Link to={'/'}>
                            <Logo size="small" />
                        </Link>
                        
                        {isHeaderOpen && <Close onClick={() => setHeaderOpen(false)} />}
                        {!isHeaderOpen && <Open onClick={() => setHeaderOpen(true)} />}                        
                    </div>
                </div>
            }
            <CSSTransition
                in={!isMobile || isMobile && isHeaderOpen}
                timeout={1000}
                classNames={isMobile ? 'fade' : 'no-anim'}
                unmountOnExit
            >
                <header className="header header--user" onClick={() => setHeaderOpen(false)}>
                    <div className="header__content">
                        {!isMobile &&
                            <Link to={'/'}>
                                <Logo />
                            </Link>
                        }

                        {isMobile &&
                            <div className="header__content--mobile">
                                <Link to={'/'}>
                                    <Logo size="small" />
                                </Link>
                                
                                {isHeaderOpen && <Close onClick={() => setHeaderOpen(false)} />}
                                {!isHeaderOpen && <Open onClick={() => setHeaderOpen(true)} />} 
                            </div>
                        }

                        <Link to={`/profile/${user.id}`}>
                            <Avatar
                                avatar={user?.avatar}
                                username={user?.username}
                                isRound
                            />
                        </Link>

                        <NavLink to={'/'} exact className="header__nav__link">Home</NavLink>
                        <NavLink to={'/upload'} exact className="header__nav__link">Upload</NavLink>
                        <NavLink to={'/notifications'} exact className="header__nav__link">Notifications</NavLink>
                        <NavLink to={'/settings'} className="header__nav__link">Settings</NavLink>
                    </div>
                    
                    <p className="header__nav__link" 
                        onClick={() => signOut(firebase, history)}
                    >Logout</p>
                </header>
            </CSSTransition>
        </Fragment>
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