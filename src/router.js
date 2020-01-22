import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Common/NavBar";
import Footer from "./Common/Footer";
import Home from "./Home";
import Submissions from "./DirectionsPage";
import LogIn from "./Login";
import CreatePage from "./CreatePage";
import AllPiecesPage from "./ViewAllPieces";
import NotFound from "./NotFound";
import IndividualPiecePage from "./IndividualPiecePage";
import AdminDashboard from "./AdminDashboard";
import CheckAuth from "./Common/CheckAuth";

export default () => (
  <Router>
    <Route component={NavBar} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/submissions" component={Submissions} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/create" component={CheckAuth(CreatePage)} />
      <Route exact path="/short-stories" component={AllPiecesPage} />
      <Route exact path="/poems" component={AllPiecesPage} />
      <Route
        exact
        path="/individual-pieces/:id"
        component={IndividualPiecePage}
      />
      <Route exact path="/admin" component={CheckAuth(AdminDashboard)} />
      <Route component={NotFound} />
    </Switch>
    <Route component={Footer} />
  </Router>
);
