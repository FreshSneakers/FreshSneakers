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
