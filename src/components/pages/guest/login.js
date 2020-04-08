import React from 'react'
import { withFirebase } from '../../../firebase'
import LoginFormBase from '../../forms/login'

const Login = () => (
    <LoginForm />
)

const LoginForm = withFirebase(LoginFormBase)

export default Login