import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { activateAccount } from "../../services/AuthAccount";
import { Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./ActivateAccount.css";
import { toast } from "react-toastify";

const ActivateAccount = () => {
  const [loading, setLoading] = useState(true)
  const { token } = useParams();

  useEffect(() => {
    activateAccount(token)
      .then(() => setLoading(false))
    toast.info('Your account has been successfully activated')
  }, [token]);ƒ

  return (
    <div className=" container__1">
      {
        loading ? (
          <div className="loading">
            <PropagateLoader color="#40464A" />
          </div>
        ) : (
          <div className="box__1">
            <h1 className="title__account">Congratulatiosn!!</h1>
            <h1 className="title__account">Your account has been activated!</h1>
            <img className="zapa" src="/img/zapa__fondo.png" alt="perfil" />
            <button className="button">
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Go to login</Link>
            </button>
          </div>
        )
      }
    </div>
  );
};

export default ActivateAccount;
