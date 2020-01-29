import React, { Component } from "react";

import "./index.css";

class Selector extends Component {
  render() {
    const { onSelectorChange, value, options } = this.props;
    return (
      <div className="selector row">
        <p>Type:</p>
        <select
          name="type"
          value={value}
          onChange={e => onSelectorChange(e)}
          className="selector_button"
        >
          {options.map(option => (
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
