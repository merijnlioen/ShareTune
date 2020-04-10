import React from 'react'
import { useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import LoginForm from '../../forms/login'
import RegisterForm from '../../forms/register'
import Gradient from '../../shared/gradient'
import Logo from '../../shared/logo'

const Auth = () => {
    const location = useLocation()

    return (
        <CSSTransition
            appear={true}
            in={true}
            classNames="auth"
            timeout={1300}
            unmountOnExit
        >
            <div className="auth__container">
                <Gradient
                    isVertical={true}
                >
                    <Logo size="large" isWhite />
                </Gradient>

                <div className="login__container">
                    <CSSTransition
                        in={location.pathname.includes('/login')}
                        classNames="slide-fade"
                        timeout={1500}
                        unmountOnExit
                        appear={true}
                    >
                            <LoginForm />
                    </CSSTransition>

                    <CSSTransition
                        in={location.pathname.includes('/register')}
                        classNames="slide-fade"
                        timeout={1500}
                        unmountOnExit
                        appear={true}
                    >
                        <RegisterForm />
                    </CSSTransition>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Auth