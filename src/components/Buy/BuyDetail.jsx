import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { buyDetail, buySneaker } from '../../services/ProductService';
import PropagateLoader from "react-spinners/PropagateLoader";
import './BuyDetail.css'
import { loadStripe } from '@stripe/stripe-js'
import { getUserInfo } from "../../services/UserService";

const BuyDetail = () => {

    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [params, setParams] = useState({})
    const [validation, setValidation] = useState('')
    const [user, setUser] = useState({})
    const { id } = useParams()
    const stripePromise = loadStripe('pk_test_51ImlDcCK7DlXsOWSgQwCw8fthV4diXaky0Mlg4pOenssObfpgrjpIw2MZqUTjO8ebtIhy9WzM75B5G8ynT7bLss900nxKeMW75');

    useEffect(() => {
        buyDetail(id)
            .then((sneaker) => {
                setState(sneaker)
            })
            .then(() => {
                setLoading(false)
            })
    }, [id])

    useEffect(() => {
        getUserInfo()
            .then((user) => {
                setUser(user)
            })
    }, [])

    const onChange = (e) => {
        setParams(e.target.value)
    }

    const onSubmit = async () => {
        const stripe = await stripePromise;
        if (Object.keys(params).length === 0) {
            setValidation('Choose a size')
        } else {
            buySneaker(id, params, user)
                .then((response) => {
                    console.log(response.sessionId)
                    stripe.redirectToCheckout({
                        sessionId:response.sessionId
                    })
                })
                .catch((e) => console.log(e))
        }
    }

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
                                <img src={state.image} alt={state.model} />
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
                                <select name="size" id="size" onChange={onChange}>
                                    <option value disabled>Select a size</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="45">45</option>
                                </select>
                            </div>

                            <div className="Buy__about">
                                <label>About this product</label><br />
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
                                <input className="sell__btn" type="submit" onClick={onSubmit} value="Buy now" />
                            </div>
                            {
                                validation.length > 0 ?
                                    <h4 style={{ color: 'red' }}>{validation}</h4>
                                    : ''
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default BuyDetail;