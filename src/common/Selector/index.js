import React, { Component } from "react";
import "./index.css";

class Selector extends Component {
  state = { value: "", errors: {} };
  onInputChange = ({ target }) => {
    const { value, name } = target;
    const { onSelectorChange } = this.props;
    this.setState({ value });
    onSelectorChange(name, value);
  };
  render() {
    const { options } = this.props;
    const { value } = this.state;

    return (
      <div className="selector">
        <p>Type</p>
        <select
          name="type"
          value={value}
          onChange={(e) => this.onInputChange(e)}
          className="selector_button"
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default Selector;
