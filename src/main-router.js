import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import { observeAuthChange, updateIsMobile } from './actions/global-actions'
import { connect } from 'react-redux'
import variables from './assets/scss/app.scss'
import Loading from './components/shared/loading'
import Message from './components/shared/message'

import GuestRouter from './guest-router'
import UserRouter from './user-router'
import ProfilePage from './components/pages/profile'

const MainRouter = ({ user, isMobile, updateIsMobile, observeAuthChange }) => {    
    useEffect(() => {
        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [isMobile])

    useEffect(() => {
        observeAuthChange()
        onResize()
    }, [])

    const onResize = () => {
        let isCurrMobile = false

        if ( window.innerWidth <= parseInt(variables.breakpointSmall.replace('px', '')) ) isCurrMobile = true
        
        if (isCurrMobile !== isMobile) return updateIsMobile(isCurrMobile)
    }

    return (
        <Router>
            <Loading isLoading={!user}>
                <Message />
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
    user: state.global.user,
    isMobile: state.global.isMobile
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    observeAuthChange: () => dispatch(observeAuthChange(ownProps.firebase)),
    updateIsMobile: value => dispatch(updateIsMobile(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter)