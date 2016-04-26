import { combineReducers } from 'redux'
import login from './login'
import routingReducer from './routingReducer'
import allProducts from './allProducts'

const rootReducer = combineReducers({
  login,
  routingReducer,
  allProducts
})

export default rootReducer
