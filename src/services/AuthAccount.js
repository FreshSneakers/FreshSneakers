import { create } from '../services/BaseService'

const http = create({
    useAccessToken: false
})

export const activate = (token) => {
    return http.get(`/activate/${token}`)
}