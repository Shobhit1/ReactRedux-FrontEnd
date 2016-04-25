import { AUTHENTICATE, LOGIN_SUCCESSFUL, LOGIN_FAILED } from '../constants/actions'
import xhr from '../../../utils/xhr'
import { goToPage } from './routingActions'

export const loginSuccessful = (userData) => {

}

export const loginFailed = (error) => {

}

export const authenticate = (credentials) => {
  return (dispatch) => {
    // xhr.post('localhost:3000/users/authenticate', credentials, {
    //   headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    //   withCredentials: true,
    //   responseType: 'json'
    // }).then((response) => {
    //   dispatch(loginSuccessful(response.data))
    //   const redirectTo = sessionStorage.getItem('redirectTo') || 'home'
    //   dispatch(goToPage(redirectTo))
    // }).catch((error) => {
    //   dispatch(loginFailed(error))
    // })
    dispatch(goToPage('/home'))
  }
}
