import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { sellDetail, sellSneaker } from '../../services/ProductService';
import './SellDetail.css'
import PropagateLoader from "react-spinners/PropagateLoader";
import { getUserInfo } from "../../services/UserService";
import { toast } from 'react-toastify';

const SellDetail = () => {
    const [state, setState] = useState({})
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [validation, setValidation] = useState('')
    const { id } = useParams()
    const { push } = useHistory()
    const sizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48']

    useEffect(() => {
        sellDetail(id)
            .then((sneaker) => {
                setState(sneaker)
            })
            .then(() => {
                setLoading(false)
            })
    }, [id])

    useEffect(() => {
        getUserInfo()
            .then((res) => {
                setUser(res)
            })
    }, [])

    useEffect(() => {
        if (user) {
            setState((prevState) => {
                return { ...prevState, user: user.id }
            })
        }
    }, [user])

    const onChange = (e) => {
        const { name, value } = e.target
        setState(prevState => {
            return { ...prevState, [name]: value }
        })
    }

    const onSubmit = () => {
        if (state.size) {
            if (user) {
                sellSneaker(state)
                    .then((res) => {
                        //hacer una page de "tu product está en venta PLUS correo nodemailer y page en profile con tus ventas y compras"
                        console.log(res)
                        toast.info('Your sale has been successfully')
                        push('/success-sell')
                    })
            } else {
                push('/login')
            }
        } else {
            setValidation('Choose a size')
        }
    }

    return (
        <div className="SellBox">
            <div className="Sell__header">
                <h1>FreshSneakers</h1>
            </div>
            {
                loading ? (
                    <div className="loading">
                        <PropagateLoader color="#40464A" />
                    </div>
                ) : (
                    <div className="SellDetail container">
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                    <h5>{state.size} €</h5>
                                                </div>
                                                <div className="Buy__body__modal_box">
                                                    <span style={{ color: '#898989' }}>PRICE</span>
                                                    <h5>{state.price} €</h5>
                                                </div>
                                            </div>
                                            <div className="Buy__body__condition">
                                                <h5>New & Unworn</h5>
                                                <h5>In Original Box</h5>
                                                <h5>Verifed Authentic</h5>
                                            </div>
                                        </div>
                                        <div className="modal__footer">
                                            <button className="buy__btn__modal" onClick={onSubmit} type="submit" data-bs-dismiss="modal">Confirm</button>
                                        </div>
                                        {
                                            validation.length > 0 ?
                                                <h5 style={{ color: 'red', textAlign: 'center' }}>{validation}</h5>
                                                : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        <div className="Sell__box1">
                            <div className="Sell__box1__image">
                                <img src={state.image} alt={state.name} />
                            </div>
                        </div>

                        <div className="Sell__box2">
                            <div className="Sell__box2__title">
                                <h2>{state.brand}</h2>
                                <h1>{state.model}</h1>
                            </div>

                            <div className="Sell__title_size">
                                <label>SELECT US SIZE</label>
                            </div>
                            <div className="select">
                                <select name="size" id="size" onChange={onChange}>
                                    <option value="">Select a size</option>
                                    {sizes.map((size) => (
                                        <option key={size} value={size}>{size}</option>
                                    ))} 
                                </select>
                            </div>

                            <div className="Sell__about">
                                <label>About this product</label><br />
                                <p>
                                    {state.description}
                                </p>
                            </div>
                            <div className="Sell__box2__title">
                                <h1>{state.price} €</h1>
                            </div>
                            <div className="Sell__box2__title">
                                <h2>condition: New</h2>
                                <h2>Colour: {state.color}</h2>
                                    <button className="sell__btn" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" >Sell now</button>
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

export default SellDetail;