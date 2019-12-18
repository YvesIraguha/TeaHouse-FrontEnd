import React, { Component } from "react";
import "./index.css";
import arrow from "../../assets/images/back.svg";

class NavBar extends Component {
  render() {
    const { title, link1, link2 } = this.props;
    return (
      <div className="group">
        <div className="item__title row">
          <p>{title}</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="item__list row">
          <ul>
            <li>{link1}</li>
            <li>{link2}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
