import React from 'react'
import { composeValidators, required, maxFileSize } from '../../helpers/validate'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { withFirebase } from '../../firebase'
import { connect } from 'react-redux'
import { showMessage } from '../../actions/global-actions'
import FileField from './file-field'

const SettingsForm = ({ firebase, showMessage }) => {

    const uploadImage = values => {
        const user = firebase.auth.currentUser
        
        const storageRef = firebase.storage.ref(`${user.uid}/profilePicture.${values.image.name.split('.').pop()}`)
        
        return storageRef.put(values.image)
            .then(snapshot => {
                snapshot.ref.getDownloadURL()
                    .then(url => {
                        user.updateProfile({
                            photoURL: url
                        })
                        showMessage('Image uploaded succesfully')
                    })
            })
            .catch(error => {
                return { [FORM_ERROR]: error.message }
            })
    }

    return (
        <Form
            onSubmit={uploadImage}
            render={({ handleSubmit, submitError }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Field 
                        name="image"
                        component={FileField}
                        label="profile picture"
                        firebase={firebase}
                        validate={composeValidators(required, maxFileSize(1000000))}
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

const mapDispatchToProps = dispatch => ({
    showMessage: message => dispatch(showMessage(message))
})

export default connect(null, mapDispatchToProps)(withFirebase(SettingsForm))