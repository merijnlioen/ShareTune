import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const LoginForm = ({ firebase }) => {
    const history = useHistory();

    const createAccount = firebase => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        firebase.doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                history.push('/')
            })
    }

    useEffect(() => {
        console.log(firebase)
    }, [firebase])

    return (
        <div>
            <h1>Login</h1>
            <input type="text" id="email" />
            <input type="password" id="password" />
            <button onClick={() => createAccount(firebase)}>Submit</button>
        </div>
    )
}

export default LoginForm