import { PRODUCT_DATA_STORE } from '../constants/actions'
import xhr from '../../../utils/xhr'

export const productDataSuccessful = (productData) => {
  return {
    type: PRODUCT_DATA_STORE,
    productData
  }
}


export const loadAllProductsData = () => {
  return (dispatch) => {
    xhr.get('http://localhost:3000/products', {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      responseType: 'json'
    }).then((response) => {
      dispatch(productDataSuccessful(response.data))
    }).catch((error) => {
      throw error
    })
  }
}
