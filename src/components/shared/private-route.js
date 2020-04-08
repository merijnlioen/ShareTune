import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ user, component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        user
        ? (
            <Component {...props} />
        )
        : (
            <Redirect to="/login" />
        )
    )} />
)

const mapStateToProps = state => ({
    user: state.global.user
})

export default connect(mapStateToProps, null)(PrivateRoute)
