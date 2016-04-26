import { GET_ALL_PRODUCTS } from '../constants/actions'
import initialState from '../initialStates/login'

const login = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return Object.assign({}, state, { productData: action.productData })
    default:
      return state
  }
}
export default login
