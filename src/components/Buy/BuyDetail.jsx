import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { buyDetail, buySneaker } from '../../services/ProductService';
import PropagateLoader from "react-spinners/PropagateLoader";
import './BuyDetail.css'
import { loadStripe } from '@stripe/stripe-js'
import { getUserInfo } from "../../services/UserService";
import { AiOutlineCheck } from "react-icons/ai";

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
                        sessionId: response.sessionId
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
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{state.model}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="Buy__img__modal">
                                            <img src={state.image} alt={state.model} />
                                        </div>
                                        <div className="Buy__body__modal">
                                            <div className="Buy__body__modal_box">
                                                <span style={{ color: '#898989' }}>SIZE</span>
                                                {params.length > 0 && <h5>{params} </h5>}
                                            </div>
                                            <div className="Buy__body__modal_box">
                                                <span style={{ color: '#898989' }}>PRICE</span>
                                                <h5>{state.price} €</h5>
                                            </div>
                                        </div>
                                        <div className="Buy__body__condition">
                                            <h5><AiOutlineCheck className="mr-2" />New & Unworn</h5>
                                            <h5><AiOutlineCheck className="mr-2" />In Original Box</h5>
                                            <h5><AiOutlineCheck className="mr-2" />Verifed Authentic</h5>
                                        </div>
                                    </div>
                                    <div className="modal__footer">
                                        <input className="buy__btn__modal" onClick={onSubmit} type="submit" value="Confirm Purchase" />
                                    </div>
                                        {
                                            validation.length > 0 ?
                                                <h5 style={{ color: 'red', textAlign:'center' }}>{validation}</h5>
                                                : ''
                                        }
                                </div>
                            </div>
                        </div>
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
                                    {
                                        state.sizes.length > 0
                                            ?
                                            state.sizes.sort().map((size) => (
                                                <option key={size} value={size}>{size}</option>
                                            ))
                                            : <option value="">Not available</option>
                                    }
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
                                <input className="sell__btn" type="submit" value="Buy now" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                            </div>
                        
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default BuyDetail;