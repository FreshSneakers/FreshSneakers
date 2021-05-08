import React, { useEffect, useState } from 'react';
import { getOrdersBuy, getOrdersSell } from '../../services/ProductService';
import { getUserInfo } from '../../services/UserService';
import PropagateLoader from "react-spinners/PropagateLoader";

import './Orders.css'
import { Link } from 'react-router-dom';

const Orders = () => {

    const [ordersBuy, setOrdersBuy] = useState({})
    const [ordersSell, setOrdersSell] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserInfo()
            .then((user) => {
                getOrdersBuy(user.id)
                    .then((res) => {
                        setOrdersBuy(res)
                    })
                    .then(() => {
                        getOrdersSell(user.id)
                            .then((res) => {
                                setOrdersSell(res)
                            })
                    })
            })
            .then(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="Orders">
            <div className="orders__header">
                <div className="container">
                    <h1>Orders</h1>
                </div>
            </div>
            <div className="order_box container">
                {
                    loading ? (
                        <div className="loading">
                            <PropagateLoader color="#40464A" />
                        </div>
                    ) : (
                        <>
                            <div className="order__box__buy">
                                <div className="order__box__title">
                                    <h1 style={{ textAlign: 'center' }} className="mt-5">Purchases</h1>
                                </div>
                                <div className="overResultBuy">
                                    {
                                        ordersBuy.length > 0 ? (
                                            ordersBuy.map((orderBuy) => (
                                                <div className="order__result" key={orderBuy._id}>
                                                    <div className="sell__result__left">
                                                        <img src={orderBuy.image} alt={orderBuy.brand} />
                                                    </div>
                                                    <div className="sell__result__right">
                                                        <h5 style={{ fontWeight: 'bold' }}>Order Number: {orderBuy._id}</h5>
                                                        <span style={{ color: '#807a7a', fontWeight: 'bold' }}>{orderBuy.model}</span>
                                                        <span style={{ color: '#807a7a', fontWeight: 'bold' }}> {orderBuy.price} €</span>
                                                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                                                            <button className="buy__btn__modal" type="submit">Contact us</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))) : (
                                            <h5 style={{ textAlign: 'center' }} className="mt-3">You have not made any purchase</h5>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="order__box__sell">
                                <div className="order__box__title">
                                    <h1 style={{ textAlign: 'center' }} className="mt-5">Sales</h1>
                                </div>
                                <div className="overResultBuy">
                                    {
                                        ordersSell.length > 0 ? (
                                            ordersSell.map((orderBuy) => (
                                                <div className="order__result" key={orderBuy._id}>
                                                    <div className="sell__result__left">
                                                        <img src={orderBuy.image} alt={orderBuy.brand} />
                                                    </div>
                                                    <div className="sell__result__right">
                                                        <h5 style={{ fontWeight: 'bold' }}>Order Number: {orderBuy._id}</h5>
                                                        <span style={{ color: '#807a7a', fontWeight: 'bold' }}>{orderBuy.model}</span>
                                                        <span style={{ color: '#807a7a', fontWeight: 'bold' }}> {orderBuy.price} €</span>
                                                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                                                            <button className="buy__btn__modal" type="submit">Contact us</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <h5 style={{ textAlign: 'center' }} className="mt-5">You have not made any sale</h5>
                                        )
                                    }
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Orders;