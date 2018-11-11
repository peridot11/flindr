import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';

export default class SignIn extends Component {
    render() {
        return (
            <div>
                <div id='signinContainer'>
                    <form id='form'>
                        <input className='input' type="text"
                               placeholder="Email"/>
                        <input className='input' type="password"
                               placeholder="Password"/>
                        <a href="/app" className="button2">Sign In</a>
                    </form>
                </div>
            </div>
        );
    }
}
