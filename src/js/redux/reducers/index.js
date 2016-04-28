import { combineReducers } from 'redux'
import login from './login'
import routingReducer from './routingReducer'
import products from './products'

const rootReducer = combineReducers({
  login,
  routingReducer,
  products
})

export default rootReducer
