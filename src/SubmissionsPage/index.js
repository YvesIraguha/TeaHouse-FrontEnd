import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import Input from "../Common/Input";
import UploadButton from "../Common/UploadButton";
import Button from "../Common/Button";
import Selector from "../Common/Selector";
import { validateSubmissions } from "../utils/validations";
import { sendWork } from "../redux/actionsCreators/inputChangeHandler";
import { renderResponseOrError } from "../utils/renderToast";

class Submissions extends Component {
  state = { errors: {}, type: "Short story" };
  submitWork = () => {
    const { sendSubmission } = this.props;
    const { fullName, email, type, file } = this.state;
    const error = validateSubmissions(fullName, email, file);
    if (error) {
      return this.setState({ errors: { ...error } });
    }
    sendSubmission({ fullName, email, type, file });
  };
  onInputChangeHandler = (name, value) => {
    this.setState({ [name]: value });
  };

  componentWillReceiveProps = nextProps => {
    const { submissionResponse } = nextProps;
    if (
      submissionResponse &&
      submissionResponse !== this.props.submissionResponse
    ) {
      renderResponseOrError(submissionResponse);
    }
  };

  render() {
    const { apiInProgress } = this.props;
    const { errors } = this.state;
    const options = ["Short story", "Poem", "Book series", "Issues"];
    return (
      <div className="submit_section">
        <div className="inputs">
          <Input
            title="Full name"
            name="fullName"
            error={errors.fullName}
            onChangeHandler={this.onInputChangeHandler}
          />
          <Input
            title="Email"
            name="email"
            error={errors.email}
            onChangeHandler={this.onInputChangeHandler}
          />
          <Selector
            onSelectorChange={this.onInputChangeHandler}
            options={options}
          />
          <UploadButton
            name="file"
            title="Select a file"
            type=".pdf"
            onChangeHandler={this.onInputChangeHandler}
            error={errors.file}
          />
          <Button
            title="Submit"
            className="submit_btn"
            onClick={this.submitWork}
            disabled={apiInProgress}
          />
        </div>
      </div>
    );
  }
}
export const mapStateToProps = ({ submitWork }) => ({
  ...submitWork
});

export const mapDispatchToProps = dispatch => ({
  sendSubmission: submissionWork => dispatch(sendWork(submissionWork))
});

export default connect(mapStateToProps, mapDispatchToProps)(Submissions);
