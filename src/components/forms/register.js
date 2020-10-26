import React from 'react'
import { useHistory } from 'react-router-dom'
import { composeValidators, required, minLength, maxLength, alphaNumeric, email, passwordConfirmation } from '../../helpers/validate'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { withFirebase } from '../../firebase'
import RenderField from './render-field'

const RegisterForm = ({ firebase }) => {
    const history = useHistory()

    const register = async values => {
        const doesUsernameExist = await firebase.db.collection('usernames').doc(values.username.toLowerCase()).get()
            .then(username => !!username.data())
            
        if (doesUsernameExist) return { [FORM_ERROR]: 'Username already in use' } 

        return firebase.doCreateUserWithEmailAndPassword(values.email, values.password)
            .then(async authUser =>  {
                await firebase.db.collection('users').doc(authUser.user.uid).set({
                    username: values.username,
                    id: authUser.user.uid,
                    timestamp: Date.now(),
                    searchName: values.username.toLowerCase()
                })
                    .catch(error => {
                        console.log(error)
                    })

                await firebase.db.collection('usernames').doc(values.username.toLowerCase()).set({
                    id: authUser.user.uid
                })
                    .catch(error => {
                        console.log(error)
                    })

                return authUser
            })
            .then(() => firebase.doSignOut())
            .then(() => history.push('/'))
            .catch(error => {
                return { [FORM_ERROR]: error.message }
            })
    }

    return (
        <Form
            onSubmit={register}
            render={({ handleSubmit, submitError, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <h2 className="heading heading--primary">Register</h2>
                    <p className="text">Please enter the fields below to create an account</p>

                    <Field 
                        name="email"
                        component={RenderField}
                        type="email"
                        label="email"
                        validate={composeValidators(required, minLength(3), email)}
                    />

                    <Field 
                        name="username"
                        component={RenderField}
                        type="text"
                        label="Username"
                        validate={composeValidators(required, minLength(3), maxLength(16), alphaNumeric)}
                    />

                    <Field 
                        name="password"
                        component={RenderField}
                        type="password"
                        label="password"
                        validate={required}
                    />

                    <Field 
                        name="passwordConfirmation"
                        component={RenderField}
                        type="password"
                        label="password confirmation"
                        validate={passwordConfirmation}
                    />

                    {submitError && <p className="form__error">{submitError}</p>}

                    <div className="action__container">
                        <button disabled={submitting} className="button">Submit</button>  
                    </div>
                </form>
            )}
        />
    )
}

export default withFirebase(RegisterForm)