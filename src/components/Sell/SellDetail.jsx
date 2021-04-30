import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { sellDetail } from '../../services/ProductService';
import './SellDetail.css'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsServer } from "react-icons/bs";

const SellDetail = () => {
    const [state, setState] = useState({})
    const { id } = useParams()

    useEffect(() => {
        sellDetail(id)
            .then((sneaker) => {
                setState(sneaker)
            })
    }, [id])

    return (
        <div className="SellDetail">
            <div className="SD__container1">
                <h1>{state.model}</h1>
                <h4><span style={{ color: 'grey' }}>Highest Bid: </span>{state.price}€ || <span style={{ color: 'grey' }}>Colour</span> {state.color}</h4>
                <div>
                    <img src={state.image} alt={state.model} />
                </div>
            </div>
            <div className="SD__container2">
                <h1>Choose your size</h1>
                <div className="select">
                    <select name="slct" id="slct">
                        <option defaultValue disabled>Select a size</option>
                        <option value="1">40</option>
                        <option value="2">41</option>
                        <option value="3">42</option>
                    </select>
                </div>

                <div className="SD__total">
                    <h4><BsServer style={{ color: 'grey' }} /><span style={{ color: 'grey' }}>Total: </span>{state.price} €</h4>
                    <h4><BsFillHouseDoorFill style={{ color: 'grey' }}/> Free Shipping</h4>
                </div>

                <div>
                    <input className="sell__btn" type="submit" value="Sell now" />
                </div>
            </div>
        </div>
    );
};

export default SellDetail;