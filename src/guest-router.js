import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/guest/home'
import Login from './components/pages/guest/login'

const GuestRouter = () => (
    <Fragment>
        {/* TODO: Navigation here */}
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    </Fragment>
)

export default GuestRouter