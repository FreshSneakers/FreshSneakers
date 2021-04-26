import { create } from '../services/BaseService'

const http = create()

export const getProducts = () => {
    return http.get('/buy')
}