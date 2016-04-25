import { combineReducers } from 'redux'
import login from './login'
import routingReducer from './routingReducer'

const rootReducer = combineReducers({
  login,
  routingReducer
})

export default rootReducer
