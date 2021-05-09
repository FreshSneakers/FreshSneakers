import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getOrder } from '../../services/ProductService';

const GenerateOrder = () => {

    const { id } = useParams()

    useEffect(() => {
        getOrder(id)
            .then((res) => console.log(res))
    }, [id])

    return (
        <div className="container__1">
            <div className="box__1">
                <h1 className="title__account">Congratulatiosn!!</h1>
                <h1 className="title__account">Your order has been generated</h1>
                <button className="button">
                    <Link to="/orders" style={{ textDecoration: 'none', color: 'black' }}>Go to Orders</Link>
                </button>
            </div>
        </div>
    );
};

export default GenerateOrder;