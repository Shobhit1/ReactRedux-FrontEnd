import { PRODUCT_DATA_STORE } from '../constants/actions'
import initialState from '../initialStates/allProducts'

const login = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DATA_STORE:
      return Object.assign({}, state, { productData: action.productData })
    default:
      return state
  }
}
export default login
