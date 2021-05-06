import React from "react";
import {Link} from 'react-router-dom'

/*import FadeLoader from "react-spinners/FadeLoader";*/


const SellOk = () => {
 

  return (
    <div className=" container__1">
      <div className="box__1">
        <h1 className="title__account">Congratulatiosn!!</h1>
        <h1 className="title__account">your shoes have been put on sale correctly!!</h1>
        <img className="zapa" src="/img/zapa__fondo.png" alt="perfil" />
        <button className="button">
          <Link to="/" style={{textDecoration:'none', color:'black'}}>Go to home</Link>
        </button>
      </div>
    </div>
  );
};

export default SellOk;