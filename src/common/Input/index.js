import React, { Component } from "react";
import "./index.css";
import {
  inputChangeHandler,
  inputErrorHandler
} from "../../redux/actionsCreators/inputChangeHandler";

class Input extends Component {
  state = { value: "", errors: {} };
  onInputChange = ({ target }) => {
    const { value, name } = target;
    const { onChangeHandler } = this.props;
    this.setState({ value });
    onChangeHandler(name, value);
  };
  render() {
    const { name, title, error } = this.props;
    const { value } = this.state;
    return (
      <div className="column input-container">
        <div className="column">
          <p className="input_title">{title}</p>
          <input
            type={name}
            name={name}
            className={`input ${error ? "error_input" : ""}`}
            value={value}
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

export default Input;
