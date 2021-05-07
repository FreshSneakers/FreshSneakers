import React from "react";
import { Link } from "react-router-dom";
import "./SuccessStripe.css";

const SuccessStripe = () => {

  return (
    <div className="SuccessStripe">
      <div className="information_buy">
        <h1>Thanks for your purchase!!</h1>
        <h2>We will contact you shortly</h2>
        <img src="/img/zapa__fondo" />
        <div className="btn__succes">
              <button >
                <Link  className="button__go__home" to="/">Back to home</Link>
              </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStripe;
