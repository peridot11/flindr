import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';

export default class SignUp extends Component {
  render() {
    return (
      <div>
           <div id='signinContainer'>
               <h1>Sign up</h1>
                <form id='form'>
                    <input className='input' type="text"
                     placeholder="First Name"/>
                    <input className='input' type="text"
                     placeholder="Last Name"/>
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
