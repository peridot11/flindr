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
/*
var WIDTH = this.props.windowWidth;
var HEIGHT = this.props.windowHeight;*/


var accept = function accept() {
  console.log("SUCCESS\n");
  alert("Accepted");
}

var decline = function decline() {
  alert("Declined");
}

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
          <div id="TripList" className="TripList-container">
            My Trips
          </div>
          <div id="Trip" className={"Trip-container "+(this.state.submitted && (this.state.accept_decline ? 'Card-yes': 'Card-no'))}>
            <img className="Trip-image" src={Areas[0].uri}/> 
            <div className="Trip-text">{TripText}</div>
            <div className="Trip-text">{TripDest}</div>
          </div>
          <div className="Buttons">
            <button type="button" className="DeclineButton" onClick={() => this.switchAcceptance(false)}>No</button>
            <button type="button" className="AcceptButton" onClick={() => this.switchAcceptance(true)}>Yes</button>
          </div>
        </div>
        {/*<div id = "Trip-text" className></div>*/}
      </Fragment>
    );
  }
}