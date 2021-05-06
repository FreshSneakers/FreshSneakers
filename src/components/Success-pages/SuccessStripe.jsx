import React from "react";
import { Link } from "react-router-dom";
import "./SuccessStripe.css";

const SuccessStripe = () => {

  return (
    <div className="SuccessStripe">
      <div className="information_buy">
        <h1>Thanks for your purchase!!</h1>
        <h2>We will contact you shortly</h2>
        <img src="/img/airboth.png" />
        <div className="btn__succes">
              <button >
                <Link  className="button__go__home" to="/">Back to home</Link>
              </button>
            </div>
        <img src="/img/zapa__fondo.png" alt="ok" />
        <button>
          <Link className="button__back" to="/">
            Back to home
          </Link>
        </button>
      </div>
        
    </div>
  );
};

export default SuccessStripe;
