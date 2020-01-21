import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import Home from "./home";
import Submissions from "./submissionsDirections";
import LogIn from "./login";
import CreatePage from "./createPage";
import AllPiecesPage from "./ViewAllPieces";
import NotFound from "./NotFound";
import IndividualPiecePage from "./IndividualPiecePage";

export default () => (
  <Router>
    <Route component={NavBar} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/submissions" component={Submissions} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/create" component={CreatePage} />
      <Route exact path="/short-stories" component={AllPiecesPage} />
      <Route exact path="/poems" component={AllPiecesPage} />
      <Route
        exact
        path="/individual-pieces/:id"
        component={IndividualPiecePage}
      />
      <Route component={NotFound} />
    </Switch>
    <Route component={Footer} />
  </Router>
);
