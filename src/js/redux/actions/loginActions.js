import { AUTHENTICATE, LOGIN_SUCCESSFUL, LOGIN_FAILED } from '../constants/actions'
import xhr from '../../../utils/xhr'
import { goToPage } from './routingActions'

// export const loginSuccessful = (userData) => {
//
// }
//
// export const loginFailed = (error) => {
//
// }

export const authenticate = (credentials) => {
  console.log(credentials)
  return (dispatch) => {
    xhr.post('http://localhost:3000/users/authenticate', credentials, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      responseType: 'json'
    }).then((response) => {
      // dispatch(loginSuccessful(response.data))
      console.log(response)
      // dispatch(goToPage('/home'))
    }).catch((error) => {
      // dispatch(loginFailed(error))
      console.log(error)
    })
  }
}
