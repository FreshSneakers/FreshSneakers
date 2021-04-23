import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Home/Home';
import Login from '../Auth/Login'
import SignUp from'../Auth/SignUp'

const AppRouter = () => {
    return (
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/login" rende={()=> <Login doLogin={getUser}/>} />
           <Route exact path="/signup" component={SignUp}/>
       </Switch>
    );
};

export default AppRouter;