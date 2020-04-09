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

                    {location.pathname.includes('/login') &&
                        <div className="login__container">
                            <LoginForm />
                        </div>
                    }

                    {location.pathname.includes('/register') &&
                        <div className="register__container">
                            <RegisterForm />
                        </div>
                    }            
            </div>
        </CSSTransition>
    )
}

export default Auth