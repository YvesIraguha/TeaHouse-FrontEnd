import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import Home from "./home";
import Submissions from "./submissionsDirections";
import LogIn from "./login";

export default () => (
  <Router>
    <Route component={NavBar} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/submissions" component={Submissions} />
      <Route exact path="/login" component={LogIn} />
    </Switch>
    <Route component={Footer} />
  </Router>
);
