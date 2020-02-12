import React, { Component } from "react";
import "./index.css";

class Upload extends Component {
  state = { error: "", value: "" };
  handleFileChange = ({ target }) => {
    const { files, name } = target;
    const { onChangeHandler } = this.props;
    this.setState({ value: files[0] });
    onChangeHandler(name, files[0]);
  };

  render() {
    const { error, name, title } = this.props;
    return (
      <div className="upload_btn_container">
        <p>{title}</p>
        <div>
          <div className="upload_button">
            <input
              type="file"
              name={name}
              id={name}
              onChange={this.handleFileChange}
            />
          </div>
        </div>
        <div className="error">
          <span>{error}</span>
        </div>
      </div>
    );
  }
}

export default Upload;
