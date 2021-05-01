import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/ProductService';
import './Buy.css'
import PropagateLoader from "react-spinners/PropagateLoader";

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
                <h1>NEW RELEASES</h1>
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
                                    <div>
                                        Results: {sneakers.length}
                                    </div>
                                    <div>
                                        Sort By: 
                                        <select>

                                        </select>
                                    </div>
                                </div>
                                <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
                                    {sneakers.map(sneaker => (
                                        <div className="col" key={sneaker.id}>
                                            <div class="card" style={{ border: "none" }}>
                                                <div className="card__img__contain">
                                                    <img src={sneaker.image} class="card-img-top" alt={sneaker.name} />
                                                </div>
                                                <div class="card-body">
                                                    <h5 className="card__brand">{sneaker.brand}</h5>
                                                    <h5 class="card__model">{sneaker.model}</h5>
                                                    <div className="card__price">
                                                        {sneaker.price} €
                                                </div>
                                                </div>
                                            </div>
                                        </div>
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