import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import emptyData from "../../assets/images/undraw_no_data_qbuo.svg";

export default () => (
  <div className="empty-data__container row">
    <img src={emptyData} alt="" />
    <div>
      <p>
        No essay has been published yet.
        <Link to="/directions">Submit one!</Link>
      </p>
    </div>
  </div>
);
