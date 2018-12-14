import React from 'react'
import {Route, Switch} from 'react-router-dom'
// NOTE Component Routes
import Auth from './components/auth/Auth'
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'
import Post from './components/post/Post'

export default (
  <Switch>
    <Route component={ Auth } exact path='/' />
    <Route component={ Form } path='/form/new' />
    <Route component={ Post } path='/post/:postid' />
    <Route component={ Dashboard } path='/dashboard' />
  </Switch>
)


