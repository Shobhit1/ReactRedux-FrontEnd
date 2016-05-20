import { logout, getReviewData } from './actions/loginActions'

export const clearSessionStorage = ({ dispatch }) => {
  sessionStorage.clear()
  dispatch(logout())
}


export const loadReviewData = ({ dispatch, getState }) => {
  const email = getState().login.userData.userData.email
  dispatch(getReviewData(email))
}
