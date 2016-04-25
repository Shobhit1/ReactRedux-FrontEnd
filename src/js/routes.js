import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './components/App'
import NotFoundView from './views/NotFoundView'

import Login from './components/pages/Login'
import productPage from './components/pages/products'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="404" component={NotFoundView} />
    {/*<Route path="/home" component={productPage} />*/}
    <Redirect from="*" to="404" />
  </Route>
)
