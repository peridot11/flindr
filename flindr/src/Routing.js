import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Login'
import SignIn from './SignIn'
import SignUp from './SignUp'
import App from './App'
import './App.css'

const Routing = () => (
    <Router>
      <div className = "App">
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/app" component={App} />
      </div>
    </Router>
  );

  export default Routing;