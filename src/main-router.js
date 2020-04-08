import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { observeAuthChange } from './actions/global-actions'
import { connect } from 'react-redux'
import Loading from './components/shared/loading'

import GuestRouter from './guest-router'
import UserRouter from './user-router'
import ProfilePage from './components/pages/profile'

const MainRouter = ({ user, observeAuthChange }) => {    
    useEffect(() => {
        observeAuthChange()
    }, [])

    return (
        <Router>
            <Loading isLoading={!user}>
                <Switch>
                    <Route path="/profile/:id" component={ProfilePage} />
                    {user && Object.keys(user).length <= 0 && <Route path="/" component={GuestRouter} />}
                    {user && Object.keys(user).length > 0 && <Route path="/" component={UserRouter} />}
                </Switch>
            </Loading>
        </Router>
    )
}

const mapStateToProps = state => ({
    user: state.global.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    observeAuthChange: () => dispatch(observeAuthChange(ownProps.firebase))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter)