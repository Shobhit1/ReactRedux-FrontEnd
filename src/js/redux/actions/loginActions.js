import { LOGIN_SUCCESSFUL, LOGIN_FAILED, LOG_OUT, TOGGLE_REGISTRATION,
        REGISTRATION_FAILED, STORE_REVIEW_DATA } from '../constants/actions'
import xhr from '../../../utils/xhr'
import { goToPage } from './routingActions'
import { clearCookie } from '../../../utils/cookies'

export const loginSuccessful = (userData) => {
  return {
    type: LOGIN_SUCCESSFUL,
    userData
  }
}

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  }
}

export const logout = () => {
  return {
    type: LOG_OUT,
  }
}

export const logoutActionCreater = () => {
  return (dispatch) => {
    clearCookie('token')
    dispatch(logout())
    dispatch(goToPage('/'))
  }
}

export const toggleRegistrationMode = (mode) => {
  return {
    type: TOGGLE_REGISTRATION,
    registration: mode
  }
}

export const registrationFailedAction = (registrationFailed) => {
  return {
    type: REGISTRATION_FAILED,
    registrationFailed
  }
}

export const registrationFailed = () => (
    registrationFailedAction(true)
)

export const saveReviewData = (data) => {
  return {
    type: STORE_REVIEW_DATA,
    data
  }
}
export const getReviewData = (email) => {
  return (dispatch) => {
    xhr.get(`https://localhost:4443/reviews/${email}`, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8', 'Content-Encoding': 'gzip' },
      responseType: 'json'
    }).then((response) => {
      dispatch(saveReviewData(response.data))
      dispatch(goToPage('/user'))
    }).catch((error) => {
      throw error
    })
  }
}

export const authenticate = (credentials) => {
  return (dispatch) => {
    xhr.get('/auth/github', credentials, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      responseType: 'json'
    }).then((response) => {
      console.log(response)
    }).catch(() => {
      dispatch(goToPage('/login'))
    })
  }
}
