import { AUTHENTICATE, CHECKING, LOGIN_SUCCESSFUL, LOGIN_FAILED } from '../constants/actions'
import initialState from '../initialStates/login'

const login = (state, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, { isAuthenticated: false, redirectTo: action.redirectTo })
    case CHECKING:
      return Object.assign({}, state, { isChecking: true, isAuthenticated: false })
    case LOGIN_SUCCESSFUL:
      return Object.assign({}, state, { isAuthenticated: true, userData: action.userData, attemptFailed: false })
    case LOGIN_FAILED:
      return Object.assign({}, state, { isAuthenticated: false, attemptFailed: true, errorMessage: action.error.data.error_description })
    default:
      return state
  }
}
export default login
