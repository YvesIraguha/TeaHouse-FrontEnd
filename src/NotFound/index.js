import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NotFound = props => {
  const {
    location: { state: { error, statusCode } = {} }
  } = props;
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1> Whoops!</h1>
        <h5>{error ? error : `We can't seem to find that`}</h5>
        <p>
          Try searching or go to <Link to="/">TEAHOUSE home page</Link>.
        </p>
        <h2 className="status__code">{statusCode ? statusCode : "404"}</h2>
      </div>
    </div>
  );
};

export default NotFound;
