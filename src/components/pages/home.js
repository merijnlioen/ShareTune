import React from 'react'
import { FirebaseContext } from '../../firebase'

const Home = () => {
    const createTestAccount = firebase => {
        firebase.doCreateUserWithEmailAndPassword('merijnlioen@gmail.com', '12345tgb')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <FirebaseContext.Consumer>
            {firebase => (
                <div>
                    <p>Firebase shit</p>
                    <button onClick={() => createTestAccount(firebase)}>Create account</button>
                </div>
            )}
        </FirebaseContext.Consumer>
    )
}

export default Home