import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { GuestHeader } from './components/shared/header'
import Home from './components/pages/guest/home/home'
import Auth from './components/pages/guest/auth'

import SharedRoutes from './shared-routes'

const GuestRouter = () => (
    <Fragment>
        <GuestHeader />

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Auth} />
            <Route path="/register" component={Auth} />
            <SharedRoutes />
        </Switch>
    </Fragment>
)

export default GuestRouter