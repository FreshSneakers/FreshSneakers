import React, { useEffect} from "react";
import { useParams } from "react-router";
import { activate } from "../../services/AuthAccount";
import { Link } from 'react-router-dom'
/*import FadeLoader from "react-spinners/FadeLoader";*/
import "./ActivateAccount.css";

const ActivateAccount = () => {
  const { token } = useParams();
  /*const [loading, setLoading] = useState(true);*/

  useEffect(() => {
    activate(token)
  }, [token]);
  

  return (
    
    <div className=" container__1">
    <div className="image__activate">
    
      <div className="title">
        <h1 className="title__account">Your account has been activated!</h1>
        <Link className="acount__link" style={{ color: "#d42a00" }} to="/login">
          Go to login
        </Link>
        <img className="zapa" src="/img/zapas2.png" alt="perfil" />
      </div>
    </div>

    </div>
    
    
  );
};

export default ActivateAccount;
