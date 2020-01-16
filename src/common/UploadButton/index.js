import React, { Component } from "react";
import "./index.css";

import filePreview from "../../assets/images/file.svg";
class Upload extends Component {
  state = { file: "", error: "" };
  handleFileChange = ({ target }) => {
    const { files, name } = target;
    const { onChangeHandler } = this.props;
    this.setState({ [name]: files[0] });
    onChangeHandler(name, files[0]);
  };

  render() {
    const { file } = this.state;
    const { error } = this.props;
    return (
      <div className="row">
        <p>Select file:</p>
        {file ? (
          <div className="row file_preview">
            <img src={filePreview} alt="File Preview" />
            <span>{file.name}</span>
          </div>
        ) : (
          <div className="upload_btn_container">
            <div>
              <input
                className="upload_button"
                type="file"
                name="file"
                id="file"
                onChange={this.handleFileChange}
              />
              <label htmlFor="file">Choose a file</label>
            </div>
            <div className="error">
              <span>{error}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Upload;
