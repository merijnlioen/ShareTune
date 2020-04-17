import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserHeader } from './components/shared/header'
import Home from './components/pages/user/home'
import Settings from './components/pages/user/settings'
import Notifications from './components/pages/user/notifications'

import SharedRoutes from './shared-routes'

const UserRouter = () => (
    <Fragment>
        <div className="user__container">
            <UserHeader />
            
            <div className="page page--user">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/settings" exact component={Settings} />
                    <Route path="/notifications" exact component={Notifications} />
                    <SharedRoutes />
                </Switch>
            </div>
        </div>
    </Fragment>
)

export default UserRouter