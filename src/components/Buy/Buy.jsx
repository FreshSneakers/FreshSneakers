import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/ProductService';
import './Buy.css'
import PropagateLoader from "react-spinners/PropagateLoader";
import { Link } from 'react-router-dom';

const Buy = () => {

    const [sneakers, setSneakers] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then((product) => {
                setSneakers(product)
            })
            .then(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="Buy">
            <div className="B__Header">
                <h1>Freshsneakers</h1>
            </div>
            <div className="container B__main">
                {
                    loading ? (
                        <div className="loading">
                            <PropagateLoader color="#40464A" />
                        </div>
                    ) : (
                        <>
                            <div className="Buy__result">
                                <div className="card__results">
                                    <div className="card__result">
                                        Results: {sneakers.length}
                                    </div>
                                    <div className="card__filter">
                                        <label style={{ marginRight: '5px' }}>Sort By:</label>
                                        <select>
                                            <option defaultValue >Brand</option>
                                            <option value="1">Nike</option>
                                            <option value="2">Jordan</option>
                                        </select>
                                    </div>
                                    <div className="card__filter">
                                        <label style={{ marginRight: '5px' }}>Sort By:</label>
                                        <select>
                                            <option defaultValue >Relevance</option>
                                            <option value="1">Price low</option>
                                            <option value="2">Price high</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
                                    {sneakers.map(sneaker => (
                                        <Link to={`/sneaker-buy/${sneaker._id}`} key={sneaker._id} style={{ textDecoration: 'none' }}>
                                            <div className="col">
                                                <div className="card" style={{ border: "none" }}>
                                                    <div className="card__img__contain">
                                                        <img src={sneaker.image} className="card-img-top" alt={sneaker.name} />
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card__brand">{sneaker.brand}</h5>
                                                        <h5 className="card__model">{sneaker.model}</h5>
                                                        <div className="card__price">
                                                            {sneaker.price} €
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Buy;