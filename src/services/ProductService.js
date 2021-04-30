import { create } from '../services/BaseService'

const http = create()

export const getProducts = () => {
    return http.get('/buy')
}

export const filterProduct = (data) => {
    return http.get('/sell', {params: {model: data}})
}

export const sellDetail = (id) => {
    return http.get(`/sneaker/${id}`)
}