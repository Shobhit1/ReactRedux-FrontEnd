import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../redux/reducers'
import { persistState } from 'redux-devtools'

export default function configureStore(initialState) {
  let enhancer
  const middleware = applyMiddleware()

  if (process.env.NODE_ENV !== 'production') {
    const getDebugSessionKey = () => {
      // By default we try to read the key from ?debug_session=<key> in the address bar
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
      return (matches && matches.length) ? matches[1] : null
    }

    enhancer = compose(

      // Middleware we want to use in development
      middleware,
      window.devToolsExtension ?
        window.devToolsExtension() :
        require('../containers/DevTools').default.instrument(),

      // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
      persistState(getDebugSessionKey())
    )
  } else {
    enhancer = compose(middleware)
  }

  const store = createStore(rootReducer, initialState, enhancer)

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../redux/reducers', () =>
      store.replaceReducer(require('../redux/reducers').default)
    )
  }
  return store
}
