import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import Home from "./home";
import Submissions from "./submissionsDirections";
import LogIn from "./login";
import CreatePage from "./createPage";

export default () => (
  <Router>
    <Route component={NavBar} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/submissions" component={Submissions} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/create" component={CreatePage} />
    </Switch>
    <Route component={Footer} />
  </Router>
);
