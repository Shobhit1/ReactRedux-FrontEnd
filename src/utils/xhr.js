import axios from 'axios'

const xhr = axios.create()
xhr.interceptors.request.use((config) => {
  const accessToken = 'hello'
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
