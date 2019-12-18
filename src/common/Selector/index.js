import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../Input";
import "./index.css";

class Selector extends Component {
  onSelectorChange = ({ target }) => {
    const { value } = target;
    const { handleInputChange } = this.props;
    handleInputChange("type", value);
  };
  render() {
    return (
      <div className="selector row ">
        <p>Type:</p>
        <select
          onChange={e => this.onSelectorChange(e)}
          className="selector_button"
        >
          <option value="Short stories">Short stories</option>
          <option value="Poems">Poems</option>
          <option value="Book series">Book series</option>
          <option value="Images">Images</option>
        </select>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Selector);
