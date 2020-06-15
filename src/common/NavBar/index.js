import React, { Component } from "react";
import "./index.css";
import NavBarItem from "./NavBarItem";
import { Link } from "react-router-dom";
import hamburger from "../../assets/images/hamburger_icon6.svg";
import logo from "../../assets/images/tea-house-logo.jpg";

class NavBar extends Component {
  state = {
    mobileClassName: "",
  };

  showHideNavigation = () => {
    const nextValue = this.state.mobileClassName === "" ? "right__mobile" : "";
    this.setState({ mobileClassName: nextValue });
  };

  onLogoClick = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { mobileClassName } = this.state;
    const {
      location: { pathname },
    } = this.props;
    return (
      <div>
        <div className="navBar row">
          <div className="triangle"></div>
          <div className="left row">
            {pathname === "/admin" ? null : (
              <div className="logo__container row" onClick={this.onLogoClick}>
                <img className="logo__image" src={logo} alt="pencil" />
              </div>
            )}

            <img
              className="hamburger__icon"
              src={hamburger}
              alt="hamburger icon"
              onClick={this.showHideNavigation}
            />
          </div>

          <div className={`right row ${mobileClassName}`}>
            <Link to="/" className="navbar-home__link">
              HOME
            </Link>
            <NavBarItem
              title="SUBMISSIONS"
              subTitle1="TERMS AND POLICIES"
              subTitle2="SUBMIT"
              link1="/directions"
              link2="/submissions"
            />
            <NavBarItem
              title="INDIVIDUAL PIECES"
              subTitle1="STORIES"
              subTitle2="POEMS"
              subTitle3="ESSAYS"
              link1="/short-stories"
              link2="/poems"
              link3="/essays"
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
      </div>
    );
  }
}

export default NavBar;
