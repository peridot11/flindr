import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <div id='signinContainer'>
                    <form id='form'>
                        <input className='input' type="text"
                               placeholder="Email"/>
                        <input className='input' type="password"
                               placeholder="Password"/>
                        <button id='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}
