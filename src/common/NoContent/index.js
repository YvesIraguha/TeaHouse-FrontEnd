import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import emptyData from "../../assets/images/undraw_no_data_qbuo.svg";

export default () => (
  <div className="empty-data__container row">
    <img src={emptyData} alt="" />
    <div>
      <h6>Ooops! There are no pieces to show on this page</h6>
      <p>
        You can <Link to="/directions">submit</Link> a piece to be reviewed by
        admin, and then, be published on this platform.
      </p>
    </div>
  </div>
);
