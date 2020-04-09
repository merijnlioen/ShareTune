import React from 'react'
import { useHistory } from 'react-router-dom'
import { composeValidators, required, minLength, email } from '../../helpers/validate'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { withFirebase } from '../../firebase'
import RenderField from './render-field'

const LoginForm = ({ firebase }) => {
    const history = useHistory()

    const login = values => 
        firebase.doSignInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                history.push('/')
            })
            .catch(error => {
                return { [FORM_ERROR]: error.message }
            })

    return (
        <Form
            onSubmit={login}
            render={({ handleSubmit, submitError }) => (
                <form onSubmit={handleSubmit}>
                    <h2 className="heading heading--primary">Login</h2>
                    <p className="text">Please enter your login credentials to continue</p>

                    <Field 
                        name="email"
                        component={RenderField}
                        type="email"
                        label="email"
                        validate={composeValidators(required, minLength(3), email)}
                    />

                    <Field 
                        name="password"
                        component={RenderField}
                        type="password"
                        label="password"
                        validate={required}
                    />

                    {submitError && <p className="form__error">{submitError}</p>}

                    <div className="action__container">
                        <button className="button">Submit</button>  
                    </div>
                </form>
            )}
        />
    )
}

export default withFirebase(LoginForm)