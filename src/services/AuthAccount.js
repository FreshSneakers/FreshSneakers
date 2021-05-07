import { create } from '../services/BaseService'

const http = create({
    useAccessToken: false
})

export const activateAccount = (token) => {
    return http.get(`/activate/${token}`)
}