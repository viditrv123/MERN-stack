import React , {useState} from 'react';
import Base from './core/Base';
import Home from './core/Home';
import Register from './core/Register';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './core/Login';
import Profile from './core/Profile';
import history from './history';





const Routes=()=>{
    return(
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Register" exact component={Register}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Profile" exact component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;