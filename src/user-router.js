import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/user/home'

const UserRouter = () => (
    <Fragment>
        {/* TODO: Navigation here */}
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </Fragment>
)

export default UserRouter