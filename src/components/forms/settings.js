import React from 'react'
import { composeValidators, minLength, maxLength, alphaNumeric, maxFileSize } from '../../helpers/validate'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { withFirebase } from '../../firebase'
import { connect } from 'react-redux'
import { showMessage } from '../../actions/global-actions'
import ImageField from './image-field'
import RenderField from './render-field'

const SettingsForm = ({ user, firebase, showMessage }) => {

    const onSubmit = async values => {
        const authUser = firebase.auth.currentUser

        const avatarUrl = await uploadImage(values.avatar, 'avatar')
        const bannerUrl = await uploadImage(values.banner, 'banner')

        const profile = {}

        if (avatarUrl) {
            profile.avatar = avatarUrl

            authUser.updateProfile({
                photoURL: avatarUrl
            })
        }
        if (bannerUrl) profile.banner = bannerUrl
        if (values.bio) profile.bio = values.bio

        if(values.bio || avatarUrl || bannerUrl) {
            firebase.db.collection('users').doc(authUser.uid).update(profile)
        }

        showMessage('Settings saved succesfully')
    }

    const uploadImage = (file, type) => {
        if (!file) return

        const authUser = firebase.auth.currentUser
        const storageRef = firebase.storage.ref(`${authUser.uid}/${type}.${file.name.split('.').pop()}`)
        
        return storageRef.put(file)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL()
                    .then(url => {
                        return url
                    })
            })
            .catch(error => {
                return { [FORM_ERROR]: error.message }
            })
    }

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{
                username: user.username,
                bio: user.bio,
            }}
            render={({ handleSubmit, submitError }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Field 
                        name="avatar"
                        component={ImageField}
                        label="profile picture"
                        photo={user.avatar}
                        validate={maxFileSize(1000000)}
                    />
                    
                    <Field 
                        name="banner"
                        component={ImageField}
                        label="banner image"
                        fullWidth
                        photo={user.banner}
                        validate={maxFileSize(1000000)}
                    />

                    <Field 
                        name="username"
                        component={RenderField}
                        label="username"
                        disabled
                        firebase={firebase}
                        validate={composeValidators(minLength(3), maxLength(16), alphaNumeric)}
                    />

                    <Field 
                        name="bio"
                        component={RenderField}
                        label="biography"
                        firebase={firebase}
                        validate={composeValidators(minLength(3), maxLength(255), alphaNumeric)}
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

const mapStateToProps = state => ({
    user: state.global.user
})

const mapDispatchToProps = dispatch => ({
    showMessage: message => dispatch(showMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(SettingsForm))