import axios from 'axios'
import {getAccessToken} from '../stores/AccessTokenStore'


export const create = (opts = {}) => {
    const http = axios.create({
        baseURL:'http://localhost:3001/api',
        ...opts
    })

    http.interceptors.request.use(request => {
        if(opts.userAccessToken !== false){
            request.headers.common.Authorization = `Bearer ${getAccessToken()}`
        }else{
            delete request.headers.common.Authorization
        }

        return request
    })

    http.interceptors.response.use(
        response => response.data
    )

    return http
}