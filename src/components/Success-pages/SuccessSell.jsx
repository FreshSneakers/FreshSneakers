import React from "react";
import { Link } from 'react-router-dom'
import './SuccessSell.css'
const SuccessSell = () => {

  return (
    <div className="container__1">
      <div className="box__1">
        <h1 className="title__account">Congratulatiosn!!</h1>
        <h1 className="title__account">your shoes have been put on sale correctly!!</h1>
        <img className="zapa" src="/img/zapa__fondo.png" alt="perfil" />
        <div className="success__condition">
          <h3>Remember</h3>
            <h5>1. FreshSneakers requires that sneakers are deadstock and 100% authentic</h5>
            <h5>2. Buyers have the option to Bid on your sneakers or buy them immediately</h5>
            <h5>3. FreshSneakers is not an auction so sneakers are not automatically sold to the highest bidder</h5>
            <h5>4. You can accept a buyer's Bid ay any time to complete a transaction</h5>
        </div>
        <button className="button">
          <Link to="/orders" style={{ textDecoration: 'none', color: 'black' }}>Go to Orders</Link>
        </button>
      </div>
    </div>
  );
};

export default SuccessSell;