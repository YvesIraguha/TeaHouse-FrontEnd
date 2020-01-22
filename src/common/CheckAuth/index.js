import React, { Component } from "react";

const CheckAuth = WrappedComponent => {
  return class extends Component {
    componentDidMount = () => {
      const token = localStorage.getItem("token");
      const { history } = this.props;
      if (!token) {
        history.replace("login");
      }
    };
    render() {
      return <WrappedComponent />;
    }
  };
};

export default CheckAuth;
