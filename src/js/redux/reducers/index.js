import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login'
import routingReducer from './routingReducer'

const rootReducer = combineReducers({
  login,
  routingReducer,
  routing: routerReducer
})

export default rootReducer
