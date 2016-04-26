import { AUTHENTICATE, LOGIN_SUCCESSFUL, LOGIN_FAILED } from '../constants/actions'
import xhr from '../../../utils/xhr'
import { goToPage } from './routingActions'

export const loginSuccessful = (userData) => {
  return {
    type: LOGIN_SUCCESSFUL,
    userData
  }
}

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error
  }
}

export const authenticate = (credentials) => {
  return (dispatch) => {
    xhr.post('/login', credentials, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      responseType: 'json'
    }).then((response) => {
      dispatch(loginSuccessful(response.data))
      dispatch(goToPage('/home'))
    }).catch((error) => {
      dispatch(loginFailed(error))
      dispatch(goToPage('/'))
    })
  }
}
