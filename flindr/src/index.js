import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from "react-router";
import {BrowserRouter, HashRouter as Router} from "react-router-dom"
import './index.css';
import './Login.css';
import Home from './Login';
import SignUp from './signup';
import SignIn from './signin';
const root = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div>
            <Route exact={true} path='/' render={() => (
                <div className="App">
                    {<Home />}
                </div>
            )}/>
            <Route exact={true} path='/signin' render={() => (
                <div className="App">
                    {<SignIn />}\
                </div>
            )}/>
            <Route exact={true} path='/signup' render={() => (
                <div className="App">
                    {<SignUp />}
                </div>
            )}/>
        </div>
    </Router>,
root);

