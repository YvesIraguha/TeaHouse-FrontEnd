import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../Common/Input";
import "./index.css";
import Button from "../Common/Button";
import { loginHandler } from "../redux/actionsCreators/loginHanlder";
import { validateLogin } from "../utils/validations";
import { renderResponseOrError } from "../utils/renderToast";
import { Link } from "react-router-dom";
class LogIn extends Component {
  state = { errors: {} };

  onInputChangeHandler = (name, value) => {
    this.setState({ [name]: value });
  };
  onSubmit = () => {
    const { SubmitLoginCredentials, history } = this.props;
    const { email, password } = this.state;
    const error = validateLogin(email, password);
    if (error) {
      return this.setState({ errors: { ...error } });
    }
    SubmitLoginCredentials(email, password, history);
  };

  componentWillReceiveProps = (nextProps) => {
    const { login } = nextProps;
    if (
      login.submissionResponse &&
      login.submissionResponse !== this.props.login.submissionResponse
    ) {
      renderResponseOrError(login.submissionResponse);
    }
  };

  render() {
    const { errors } = this.state;
    const {
      login: { apiInProgress },
    } = this.props;
    return (
      <div className="login_container column">
        <div className="login_content">
          <p className="title">Sign in for admin privileges</p>
          <Input
            title="Email"
            name="email"
            error={errors.email}
            onChangeHandler={this.onInputChangeHandler}
          />
          <Input
            title="Password"
            name="password"
            error={errors.password}
            onChangeHandler={this.onInputChangeHandler}
          />
          <Button
            title="Sign in"
            onClick={this.onSubmit}
            disabled={apiInProgress}
          />
          <p>
            <Link to="/reset-password" className="forgot_password">
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ login }) => ({
  login,
});
const mapDispatchToProps = (dispatch) => ({
  SubmitLoginCredentials: (email, password, history) =>
    dispatch(loginHandler(email, password, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
