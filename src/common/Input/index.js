import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import {
  inputChangeHandler,
  inputErrorHandler
} from "../../redux/actionsCreators/inputChangeHandler";
import { validateSubmissions } from "../../utils/validations";
class Input extends Component {
  state = { value: "", errors: {} };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    const { handleInputChange, inputError } = this.props;
    this.setState({ value });
    handleInputChange(name, value);
    const error = validateSubmissions(name, value);
    inputError(name, error);
  };

  displayError = ({ target }) => {
    const { name } = target;
    const { errors } = this.props;
    this.setState({ errors: { [name]: errors[name] } });
  };

  render() {
    const { name, title } = this.props;
    const {
      value,
      errors: { [name]: error }
    } = this.state;
    return (
      <div className="column input-container">
        <div className="row">
          <p>{title}:</p>
          <input
            name={name}
            className={`input ${error ? "error_input" : ""}`}
            value={value}
            onBlur={e => this.displayError(e)}
            onChange={e => this.onInputChange(e)}
          />
        </div>
        <div className="error">
          <span>{error}</span>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ inputError }) => ({
  errors: inputError
});
export const mapDispatchToProps = dispatch => ({
  handleInputChange: (name, value) => dispatch(inputChangeHandler(name, value)),
  inputError: (name, value) => dispatch(inputErrorHandler(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
