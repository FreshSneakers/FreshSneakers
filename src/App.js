import { useEffect, useState } from "react";
import "./App.css";
//import AppRouter from './components/AppRouter/AppRouter';
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
      {/*<AppRouter />*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login doLogin={getUser} />} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/buy" component={Buy}/>
        <Route exact path="/sell" component={Sell}/>
        <Route exact path="/sneaker/:id" component={SellDetail}/>
        <Route exact path="/activate/:token" component={ActivateAccount}/>

      </Switch>
    </div>
  );
}

export default App;
