import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

const RegisterForm = ({ firebase }) => {
    const history = useHistory()

    const createAccount = () => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        firebase.doCreateUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            })
    }

    return (
        <Fragment>
            <h1>Register</h1>
            <input type="text" id="email" />
            <input type="password" id="password" />
            <button onClick={() => createAccount()}>Submit</button>
        </Fragment>
    )
}

export default RegisterForm