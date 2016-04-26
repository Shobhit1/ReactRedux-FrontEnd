import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import store from './store/configureStore'

import App from './components/App'
import NotFoundView from './views/NotFoundView'
import Login from './components/pages/Login'
import productPage from './components/pages/products'

import { loadAllProducts } from './redux/hooks'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/home" component={productPage} onEnter={() => loadAllProducts(store)} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
)
