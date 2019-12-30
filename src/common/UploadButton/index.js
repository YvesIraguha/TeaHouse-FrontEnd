import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../Input";

import filePreview from "../../assets/images/file.svg";
class Upload extends Component {
  handleFileChange = ({ target }) => {
    const { name, files } = target;
    const { handleInputChange } = this.props;
    handleInputChange(name, files[0]);
  };

  render() {
    const { error, submissionWork: { file } = {} } = this.props;
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

export const mapStateToProps = ({ submissionWork }, ownProps) => ({
  submissionWork,
  ...ownProps
});
export default connect(mapStateToProps, mapDispatchToProps)(Upload);
