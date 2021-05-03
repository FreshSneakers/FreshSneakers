import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch } from "react-router";
import { getUserInfo } from "./services/UserService";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Buy from "./components/Buy/Buy"
import { getAccessToken } from "./stores/AccessTokenStore";
import ActivateAccount from "./components/TokenAccount/ActivateAccount";
import Sell from "./components/Sell/Sell";
import SellDetail from "./components/Sell/SellDetail"
import Profile from "./components/Profile/Profile"
import BuyDetail from "./components/Buy/BuyDetail";
import SuccessStripe from "./components/Success-pages/SuccessStripe";

function App() {
  const [user, setUser] = useState(null);

  const getUser = () => {
    return getUserInfo()
      .then((response) => setUser(response));
  };

  useEffect(() => {
    if (getAccessToken()) {
      getUser()
    }
  }, [])

  return (
    <div className="App">
      <NavBar user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login doLogin={getUser} />} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/sell" component={Sell} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/successful-pay" component={SuccessStripe}/>
        <Route exact path="/sneaker-buy/:id" component={BuyDetail} />
        <Route exact path="/sneaker-sell/:id" component={SellDetail} />
        <Route exact path="/activate/:token" component={ActivateAccount} />
      </Switch>
    </div>
  );
}

export default App;
