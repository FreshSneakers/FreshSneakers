import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { activate } from "../../services/AuthAccount";
import {Link} from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";
import "./ActivateAccount.css";

const ActivateAccount = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    activate(token).then(setLoading(false));
  }, []);

  return (
    <div className="image__activate">
      <div className="title">
        <h1>Your account has been activated!</h1>
        <Link className="acount__link" style={{ color: "#FFF" }} to="/login">
                Go to login
              </Link>
      </div>
    </div>
  );
};

export default ActivateAccount;
