import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './js/store/configureStore'
import { Router, browserHistory } from 'react-router'
import DevTools from './js/containers/DevTools'
import routes from './js/routes'

// const store = configureStore()
const rootElement = document.getElementById('app')

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  </Provider>,
  rootElement
)
