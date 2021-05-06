import axios from 'axios'
import { getAccessToken, logout } from '../stores/AccessTokenStore'


export const create = (opts = {}) => {
  const http = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOST}/api`,
    ...opts
  })

  http.interceptors.request.use(request => {
    if (opts.useAccessToken !== false) {
      request.headers.common.Authorization = `Bearer ${getAccessToken()}`
    } else {
      delete request.headers.common.Authorization
    }

    return request
  })

  http.interceptors.response.use(
    response => response.data,
    error => {
      if (error.response && [401, 403].includes(error.response.status)) {
        logout()
      }
      if (error.response && [404].includes(error.response.status)) {
        return error.response
      }

      return Promise.reject(`error`)
    }
  )

  return http
}