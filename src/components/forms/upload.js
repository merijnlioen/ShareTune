import React from 'react'
import { composeValidators, required, minLength, maxLength, audioFile, maxFileSize } from '../../helpers/validate'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { withFirebase } from '../../firebase'
import { showMessage } from '../../actions/global-actions'
import { connect } from 'react-redux'
import RenderField from './render-field'
import ImageField from './image-field'
import FileField from './file-field'

const UploadForm = ({ firebase, showMessage }) => {
    const upload = async values => {
        const authUser = firebase.auth.currentUser

        const backgroundUrl = await uploadImage(values.background)
        const songUrl = await uploadSong(values.song)

        firebase.db.collection('songs').add({
            background: backgroundUrl,
            song: songUrl,
            artist: values.artist,
            title: values.title,
            uploader: authUser.uid
        })

        return showMessage('Settings saved succesfully')
    }

    const uploadImage = file => {
        if (!file) return

        const authUser = firebase.auth.currentUser
        const storageRef = firebase.storage.ref(`${authUser.uid}/images/${createUUID()}.${file.name.split('.').pop()}`)
        
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

    const uploadSong = file => {
        if (!file) return

        const authUser = firebase.auth.currentUser
        const storageRef = firebase.storage.ref(`${authUser.uid}/songs/${createUUID()}.${file.name.split('.').pop()}`)
        
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

    const createUUID = () => {
        var s = []
        var hexDigits = '0123456789abcdef'

        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
        }

        s[14] = '4'
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
        s[8] = s[13] = s[18] = s[23] = '-'
    
        return s.join('')
    }

    return (
        <Form
            onSubmit={upload}
            render={({ handleSubmit, submitError, submitting }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Field 
                        name="title"
                        component={RenderField}
                        type="text"
                        label="Song Name"
                        validate={composeValidators(required, minLength(3), maxLength(64))}
                    />

                    <Field 
                        name="artist"
                        component={RenderField}
                        type="text"
                        label="Artist"
                        validate={composeValidators(required, minLength(3), maxLength(64))}
                    />
                    
                    <Field 
                        name="background"
                        component={ImageField}
                        label="Background"
                        validate={maxFileSize(2000000)}
                    />

                    <Field 
                        name="song"
                        component={FileField}
                        label="Song"
                        validate={composeValidators(audioFile, maxFileSize(10000000))}
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

const mapDispatchToProps = dispatch => ({
    showMessage: value => dispatch(showMessage(value))
})

export default connect(null, mapDispatchToProps)(withFirebase(UploadForm))