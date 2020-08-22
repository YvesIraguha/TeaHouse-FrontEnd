import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Common/NavBar";
import Footer from "./Common/Footer";
import Home from "./Home";
import DirectionsPage from "./DirectionsPage";
import LogIn from "./Login";
import CreatePiecePage from "./CreatePiecePage";
import AllPiecesPage from "./ViewAllPieces";
import NotFound from "./NotFound";
import IndividualPiecePage from "./IndividualPiecePage";
import AdminDashboard from "./AdminDashboard";
import CheckAuth from "./Common/CheckAuth";
import CreateCollections from "./CreateCollections";
import ViewCollections from "./ViewCollections";
import RequestResetPassword from "./RequestResetPassword";
import ResetPassword from "./ResetPassword";
import SubmissionPage from "./SubmissionsPage";

export default () => (
  <Router>
    <div
      style={{
        paddingBottom: "7rem",
      }}
    >
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: 65 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/directions" component={DirectionsPage} />
          <Route exact path="/submissions" component={SubmissionPage} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/create" component={CheckAuth(CreatePiecePage)} />
          <Route
            exact
            path="/createCollection"
            component={CheckAuth(CreateCollections)}
          />
          <Route exact path="/short-stories" component={AllPiecesPage} />
          <Route exact path="/poems" component={AllPiecesPage} />
          <Route
            exact
            path="/individual-pieces/:id"
            component={IndividualPiecePage}
          />
          <Route
            exact
            path="/individual-pieces/edit/:id"
            component={CheckAuth(CreatePiecePage)}
          />
          <Route exact path="/book-series" component={ViewCollections} />
          <Route exact path="/issues" component={ViewCollections} />
          <Route exact path="/admin" component={CheckAuth(AdminDashboard)} />
          <Route
            exact
            path="/reset-password"
            component={RequestResetPassword}
          />
          <Route
            exact
            path="/reset-password/:token"
            component={ResetPassword}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    <Route component={Footer} />
  </Router>
);
