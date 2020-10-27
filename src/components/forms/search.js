import React, { useState } from 'react'
import { composeValidators, minLength, maxLength, alphaNumeric } from '../../helpers/validate'
import { Form, Field } from 'react-final-form'
import { withFirebase } from '../../firebase'
import { connect } from 'react-redux'
import { showMessage } from '../../actions/global-actions'
import { Link } from 'react-router-dom'
import RenderField from './render-field'
import Avatar from '../shared/avatar'

const SearchForm = ({ firebase }) => {
    const [searchTimeout, setSearchTimeout] = useState()
    const [searchResults, setSearchResults] = useState()

    const onSubmit = values => {
        if (!values.search) {
            setSearchResults()
            return clearTimeout(searchTimeout)
        }
        if (searchTimeout) clearTimeout(searchTimeout)

        setSearchTimeout(setTimeout(() => {
            firebase.db.collection('users').orderBy('searchName')
                .startAt(values.search.toLowercase())
                .endAt(values.search.toLowercase() + "\uf8ff")
                .get()
                .then(snapshot => snapshot.docs.map(user => user.data()))
                .then(users => setSearchResults(users))
        }, 500))
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Field 
                        name="search"
                        component={RenderField}
                        label="Search"
						firebase={firebase}
						inputOnChange={e => handleSubmit(e)}
                        validate={composeValidators(minLength(1), maxLength(255), alphaNumeric)}
                    />

                    {searchResults?.map((user, index) => (
                        <Link to={`/profile/${user.id}`} key={index} className="search__result">
                            <Avatar username={user.username} avatar={user.avatar} isRound isSmall />

                            <p>{user.username}</p>
                        </Link>
                    ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(SearchForm))