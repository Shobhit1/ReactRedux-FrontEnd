import axios from 'axios'

const xhr = axios.create()
xhr.interceptors.request.use((config) => {
  const accessToken = document.cookie.split()[0].trim().split('=')[1]
  const headers = config.headers
  if (accessToken && headers) {
    headers.Authorization = `Bearer ${accessToken}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

xhr.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default xhr
