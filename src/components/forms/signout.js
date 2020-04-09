import React from 'react'
import { withFirebase } from '../../firebase'

const SignoutForm = ({ firebase }) => {
    const onSubmit = () => {
        firebase.doSignOut()
    }
    
    return (
        <button onClick={() => onSubmit()}>Signout</button>
    )
}

export default withFirebase(SignoutForm)