import React, { Component } from "react";
import "./index.css";

import filePreview from "../../assets/images/file.svg";
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
    const { value } = this.state;
    return (
      <div className="row">
        <p>{title}</p>

        {value ? (
          <div className="row file_preview">
            <img src={filePreview} alt="File Preview" />
            <span>{value.name}</span>
          </div>
        ) : (
          <div className="upload_btn_container">
            <div>
              <input
                className="upload_button"
                type="file"
                name={name}
                id={name}
                onChange={this.handleFileChange}
              />
              <label htmlFor={name}>Choose a file</label>
            </div>
          </div>
        )}
        <div className="error">
          <span>{error}</span>
        </div>
      </div>
    );
  }
}

export default Upload;
