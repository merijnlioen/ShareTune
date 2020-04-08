import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { GuestHeader } from './components/shared/header'
import Home from './components/pages/guest/home'
import Login from './components/pages/guest/login'
import NotFound from './components/pages/not-found'

const GuestRouter = () => (
    <Fragment>
        <GuestHeader />

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Fragment>
)

export default GuestRouter