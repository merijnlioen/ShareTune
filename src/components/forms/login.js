import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

const LoginForm = ({ firebase }) => {
    const history = useHistory()

    const login = () => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        firebase.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            })
    }

    return (
        <Fragment>
            <h1>Login</h1>
            <input type="text" id="email" />
            <input type="password" id="password" />
            <button onClick={() => login()}>Submit</button>
        </Fragment>
    )
}

export default LoginForm