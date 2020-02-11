import React, { Component } from "react";
import "./index.css";
import NavBarItem from "./NavBarItem";
import hamburger from "../../assets/images/hamburger_icon6.svg";
import pencil from "../../assets/images/pencil.svg";

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
        <div className="triangle"></div>
        <div className="left row">
          <div className="logo__container row">
            <h1>TEAHOUSE</h1>
            <img
              className="logo__image"
              src={pencil}
              alt="hamburger icon"
              onClick={this.showHideNavigation}
            />
          </div>

          <img
            className="hamburger__icon"
            src={hamburger}
            alt="hamburger icon"
            onClick={this.showHideNavigation}
          />
        </div>

        <div className={`right row ${mobileClassName}`}>
          <NavBarItem
            title="SUBMISSIONS"
            subTitle1="STORIES"
            subTitle2="POEMS"
            link1="/submissions"
            link2="/submissions"
          />
          <NavBarItem
            title="INDIVIDUAL PIECES"
            subTitle1="STORIES"
            subTitle2="POEMS"
            link1="/short-stories"
            link2="/poems"
          />
          <NavBarItem
            title="COLLECTIONS"
            subTitle1="BOOK SERIES"
            subTitle2="ISSUES"
            link1="/book-series"
            link2="/issues"
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
