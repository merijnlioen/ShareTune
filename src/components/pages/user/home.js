import React, { Fragment } from 'react'
import Signout from '../../forms/signout'
import { withFirebase } from '../../../firebase'

const Home = ({ firebase }) => {
    const sendMessage = () => {
        console.log('test')
        // const addMessage = firebase.functions.httpsCallable('addMessage')

        // addMessage({ text: 'Test' })
        //     .then(result => console.log(result))
        //     .catch(error => console.error(error))
    }

    return (
        <div className="inner">
            <h1>User home</h1>
            <Signout />
            <button onClick={() => sendMessage()}>Send</button>
        </div>
    )
}

export default withFirebase(Home)