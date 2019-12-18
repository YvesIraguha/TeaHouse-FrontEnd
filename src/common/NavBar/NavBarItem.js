import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import arrow from "../../assets/images/back.svg";

class NavBar extends Component {
  render() {
    const { title, link1, link2, subTitle1, subTitle2 } = this.props;
    return (
      <div className="group">
        <div className="item__title row">
          <p>{title}</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="item__list row">
          <ul>
            <li>
              <Link to={link1}>{subTitle1}</Link>
            </li>
            <li>
              <Link to={link2}>{subTitle2}</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
