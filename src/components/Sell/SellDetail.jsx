import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { sellDetail, sellSneaker } from '../../services/ProductService';
import './SellDetail.css'
import PropagateLoader from "react-spinners/PropagateLoader";

const SellDetail = () => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [validation, setValidation] = useState('')
    const { push } = useHistory()

    useEffect(() => {
        sellDetail(id)
            .then((sneaker) => {
                setState(sneaker)
            })
            .then(() => {
                setLoading(false)
            })
    }, [id])

    const onChange = (e) => {
        const { name, value } = e.target
        setState(prevState => {
            return { ...prevState, [name]:value}
        })
    }

    const onSubmit = () => {
        if(state.size){
            sellSneaker(state)
                .then((response) => {
                    console.log('front', response)
                })
        }else{
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
                                    <option defaultValue disabled>Select a size</option>
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

                            <div className="Sell__about">
                                <label>About this producut</label><br />
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
                                <input className="sell__btn" type="submit" onClick={onSubmit}  value="Sell now" />
                            </div>
                            {
                                validation.length > 0 ? 
                                <h4 style={{color:'red'}}>{validation}</h4>
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