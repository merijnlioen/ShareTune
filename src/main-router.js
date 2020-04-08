import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GuestRouter from './guest-router'
import UserRouter from './user-router'
import ProfilePage from './components/pages/profile'

const MainRouter = ({ firebase }) => {
    const [loggedIn, setLoggedIn] = useState()
    
    useEffect(() => {
        firebase.auth.onAuthStateChanged(authUser => {
            if(authUser) return setLoggedIn(true)
            setLoggedIn(false)
        })
    }, [])

    return (
        <Router>
            <Switch>
                <Route path="/profile/:id" component={ProfilePage} />
                {!loggedIn && <Route path="/" component={GuestRouter} />}
                {loggedIn && <Route path="/" component={UserRouter} />}
            </Switch>
        </Router>
    )
}

export default MainRouter