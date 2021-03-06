import React, { useEffect } from "react";
import { useParams } from "react-router";
import { activateAccount } from "../../services/AuthAccount";
import { Link } from "react-router-dom";
import "./ActivateAccount.css";
import { toast } from "react-toastify";

const ActivateAccount = () => {
  const { token } = useParams();

  useEffect(() => {
    activateAccount(token)
    toast.info('Your account has been successfully activated')
  }, [token]);

  return (
    <div className=" container__1">
      {
        <div className="box__1">
          <h1 className="title__account">Congratulatiosn!!</h1>
          <h1 className="title__account">Your account has been activated!</h1>
          <img className="zapa" src="/img/zapa__fondo.png" alt="perfil" />
          <button className="button">
            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Go to login</Link>
          </button>
        </div>
      }
    </div>
  );
};

export default ActivateAccount;
