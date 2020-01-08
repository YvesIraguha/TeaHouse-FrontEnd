import React, { Component } from "react";

import "./index.css";

class Selector extends Component {
  render() {
    const { onSelectorChange } = this.props;
    return (
      <div className="selector row">
        <p>Type:</p>
        <select
          name="type"
          onChange={e => onSelectorChange(e)}
          className="selector_button"
        >
          <option value="Short story">Short story</option>
          <option value="Poem">Poem</option>
        </select>
      </div>
    );
  }
}
export default Selector;
