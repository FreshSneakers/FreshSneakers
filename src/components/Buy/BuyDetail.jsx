import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { buyDetail } from '../../services/ProductService';
import PropagateLoader from "react-spinners/PropagateLoader";
import './BuyDetail.css'

const BuyDetail = () => {

    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        buyDetail(id)
            .then((sneaker) => {
                setState(sneaker)
            })
            .then(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div className="BuyBox">
            <div className="Buy__header">
                <h1>FreshSneakers</h1>
            </div>
            {
                loading ? (
                    <div className="loading">
                        <PropagateLoader color="#40464A" />
                    </div>
                ) : (
                    <div className="BuyDetail container">
                        <div className="Buy__box1">
                            <div className="Buy__box1__image">
                                <img src={state.image} alt={state.name} />
                            </div>
                        </div>

                        <div className="Buy__box2">
                            <div className="Buy__box2__title">
                                <h2>{state.brand}</h2>
                                <h1>{state.model}</h1>
                            </div>

                            <div className="Buy__title_size">
                                <label>SELECT US SIZE</label>
                            </div>
                            <div className="select">
                                <select name="size" id="size">
                                    <option defaultValue disabled>Select a size</option>
                                    <option value="1">40</option>
                                    <option value="2">41</option>
                                    <option value="3">42</option>
                                </select>
                            </div>

                            <div className="Buy__about">
                                <label>About this producut</label><br />
                                <p>
                                    {state.description}
                                </p>
                            </div>
                            <div className="Buy__box2__title">
                                <h1>{state.price} €</h1>
                            </div>
                            <div className="Buy__box2__title">
                                <h2>condition: New</h2>
                                <h2>Colour: {state.color}</h2>
                                <input className="sell__btn" type="submit" value="Buy now" />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default BuyDetail;