import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './components/App'
import NotFoundView from './views/NotFoundView'

import Login from './components/Login'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
)
