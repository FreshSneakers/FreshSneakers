import {create} from '../services/BaseService'

const http = create()

export const getUserInfo = () => {
    return http.get('/users/me')
}