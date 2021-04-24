import { create } from '../services/BaseService'

const http = create({
    useAccessToken: false
})

export const login = (body) => {
    return http.post('/login', body)
}

export const signup = (body) => {
    return http.post('/signup', body)
}