import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserHeader } from './components/shared/header'
import Home from './components/pages/user/home'
import Settings from './components/pages/user/settings'

import SharedRoutes from './shared-routes'

const UserRouter = () => (
    <Fragment>
        <div className="user__container">
            <UserHeader />
            
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/settings" exact component={Settings} />
                <SharedRoutes />
            </Switch>
        </div>
    </Fragment>
)

export default UserRouter