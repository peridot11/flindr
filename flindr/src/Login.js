import React, { Component } from 'react';
import './Login.css';
import plane from './plane.png';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";


export default class Login extends Component {
  render() {
    return (
        <div className="firstpage">
            <div className="title">Flindr</div>
            <a href="/signin" className="button1">Sign In</a>
            <a href="/signup" className="button2">Sign Up</a>
            <img src={plane} className="plane" />
        </div>
    );
  }
}
