import React, {StyleSheet, Text, View, Dimensions, Animated, Component, Fragment}  from 'react';
import logo from './logo.svg';
import like from './assets/images/like.png';
import nope from './assets/images/nope.png';
import './App.css';

var Areas = [
  {id: "1", uri: require('./assets/images/1.png')},
  {id: "2", uri: require('./assets/images/2.png')},
  {id: "3", uri: require('./assets/images/3.png')},
]

var TripText = "Canary";
var TripDest = "Bermuda";
var Price = "425$";
/*
var WIDTH = this.props.windowWidth;
var HEIGHT = this.props.windowHeight;*/

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accept_decline: false,
      submitted: false,
    };
  }

  switchAcceptance(bool){
    console.log(this.state.accept_decline)
    this.setState({accept_decline: bool, submitted:true})
  }

  render() {
    return ( 
      <Fragment>
        <div className="App">
          <div id="Navbar" className="Navbar">
            <div id="Swipe" className="Navbar-item"><a class="Navbar-link" href="">Home</a></div>
            <div id="List" className="Navbar-item"><a class="Navbar-link" href="">Trips</a></div>
            <div id="Profile" className="Navbar-item"><a class="Navbar-link" href="">Profile</a></div>
          </div>
          <div id="Trip" className={"Trip-container "+(this.state.submitted && (this.state.accept_decline ? 'Card-yes': 'Card-no'))}>
            <img className="Trip-image" src={Areas[0].uri}/> 
            <div className="Trip-text">{TripText} {TripDest} {Price}</div>
            
          </div>
          <div className="button">
            <button type="button" className="button decline" onClick={() => this.switchAcceptance(false)}>No</button>
            <button type="button" className="button accept" onClick={() => this.switchAcceptance(true)}>Yes</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
/*

<div className="App left">
  <div id="TripList" className="TripList-container">
  </div>
</div>*/