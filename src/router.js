import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './common/NavBar'
import Footer from './common/Footer';
import Home from './home';


export default () => (
  <Router>
    <Route component={NavBar} />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Route component={Footer} />
  </Router>
)