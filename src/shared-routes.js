import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProfilePage from './components/pages/profile'
import NotFound from './components/pages/not-found'

const SharedRouter = () => (
    <Switch>
        <Route path="/profile/:id" component={ProfilePage} />
        <Route component={NotFound} />
    </Switch>
)

export default SharedRouter