import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'
import { persistState } from 'redux-devtools'

export default function configureStore(initialState) {
  let enhancer

  const store = createStore(rootReducer, applyMiddleware(thunk))

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../redux/reducers', () =>
      store.replaceReducer(require('../redux/reducers').default)
    )
  }
  return store
}
