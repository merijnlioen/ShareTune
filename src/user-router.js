import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/user/home'
import NotFound from './components/pages/not-found'
import { UserHeader } from './components/shared/header'

const UserRouter = () => (
    <Fragment>
        <div className="user__container">
            <UserHeader />
            
            <div className="inner">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </Fragment>
)

export default UserRouter