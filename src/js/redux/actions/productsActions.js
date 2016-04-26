import xhr from '../../../utils/xhr'

export const loadAllProductsData = () => {
  return (dispatch) => {
    xhr.get('http://localhost:3000/products', {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      responseType: 'json'
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }
}
