import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './js/store/configureStore'
import { Router, browserHistory } from 'react-router'

import routes from './js/routes'

const store = configureStore()
const rootElement = document.getElementById('app')

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  </Provider>,
  rootElement
)
