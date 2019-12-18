import React, { Component } from "react";
import "./index.css";
import NavBarItem from "./NavBarItem";
import hamburger from "../../assets/images/hamburger_icon6.svg";

class NavBar extends Component {
  state = {
    mobileClassName: ""
  };

  showHideNavigation = () => {
    const nextValue = this.state.mobileClassName === "" ? "right__mobile" : "";
    this.setState({ mobileClassName: nextValue });
  };

  render() {
    const { mobileClassName } = this.state;
    return (
      <div className="navBar row">
        <div className="left row">
          <h1>TEAHOUSE</h1>
          <img
            src={hamburger}
            alt="hamburger icon"
            onClick={this.showHideNavigation}
          />
        </div>

        <div className={`right row ${mobileClassName}`}>
          <NavBarItem title="SUBMISSIONS" link1="STORIES" link2="POEMS" />
          <NavBarItem title="INDIVIDUAL PIECES" link1="STORIES" link2="POEMS" />
          <NavBarItem title="COLLECTIONS" link1="BOOK SERIES" link2="IMAGES" />
        </div>
      </div>
    );
  }
}

export default NavBar;
