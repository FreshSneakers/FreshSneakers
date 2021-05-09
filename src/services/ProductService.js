import { create } from '../services/BaseService'

const http = create()

export const getProducts = (brand, price) => {
    return http.get('/buy', { params: { brand: brand, price: price } })
}

export const filterProduct = (data) => {
    return http.get('/sell', { params: { model: data } })
}

export const buyDetail = (id) => {
    return http.get(`/sneaker-buy/${id}`)
}

export const buySneaker = (id, size, user) => {
    return http.post('/buy/sneaker', { params: { product: id, size: size, user: user } })
}

export const sellDetail = (id) => {
    return http.get(`/sneaker-sell/${id}`)
}

export const sellSneaker = (body) => {
    return http.post('/sell/sneaker', body)
}

export const getOrder = (id) => {
    return http.get(`/order/${id}` )
}

export const getOrdersBuy = (user) => {
    return http.get('/orders-buy', { params: { user: user } })
}

export const getOrdersSell = (user) => {
    return http.get('/orders-sell', { params: { user: user } })
}
