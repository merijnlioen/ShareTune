import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GuestRouter from './guest-router'
import UserRouter from './user-router'

const MainRouter = () => {
    const [loggedIn, setLoggedIn] = useState()

    useEffect(() => {
        setTimeout(() => {
            setLoggedIn(true)
        }, 5000)
    }, [setLoggedIn])

    return (
        <Router>
            <Switch>
                {!loggedIn && <Route path="/">
                    <GuestRouter />
                </Route>}
                {loggedIn && <Route path="/">
                    <UserRouter />
                </Route>}
            </Switch>
        </Router>
    )
}

export default MainRouter