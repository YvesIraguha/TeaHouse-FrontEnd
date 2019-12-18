import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";

import Input from "../common/Input";
import UploadButton from "../common/UploadButton";
import Button from "../common/Button";
import Selector from "../common/Selector";
import ShortStories from "./ShortStories";
import Poems from "./Poems";
import BookSeries from "./BookSeries";
import Images from "./Images";
import { checkErrors } from "../utils/validations";
import {
  sendWork,
  clearSubmissionResponse
} from "../redux/actionsCreators/inputChangeHandler";
import { toast } from "react-toastify";
class Submissions extends Component {
  state = { disabled: false };
  submitWork = () => {
    const { sendSubmission, submissionWork } = this.props;
    const submissionError = checkErrors(submissionWork);

    if (submissionError) {
      return this.setState({ error: submissionError });
    }
    sendSubmission(submissionWork);
  };

  renderSuccess = message => {
    const { clearResponse } = this.props;
    toast.success(message, { onClose: () => clearResponse() });
  };

  renderError = error => {
    const { clearResponse } = this.props;
    toast.error(error, { onClose: () => clearResponse() });
  };

  render() {
    const { inputError, apiInProgress, submissionResponse } = this.props;
    const { error } = this.state;
    return (
      <div className="submissions__container">
        <h1>SUBMISSIONS GUIDELINES</h1>
        <ShortStories />
        <Poems />
        <BookSeries />
        <Images />
        <div className="column submit__section__container">
          <div>
            <h2>Got something to showcase on this platform?</h2>
            <p>
              You can send a short story, poem, book series, and image
              collections book. Fill out the form below and submit your work to
              be reviewed by admin.
            </p>
          </div>
          <div className="submit_section">
            <div className="row inputs">
              <Input title="Full name" name="fullName" />
              <Input title="Email" name="email" />
            </div>
            <div className="row buttons">
              <UploadButton error={error} />
              <Selector />
            </div>
          </div>
          <div className="row submit_btn">
            <Button
              title="Submit"
              onClick={this.submitWork}
              disabled={!checkErrors(inputError) || apiInProgress}
            />
          </div>
        </div>
        {submissionResponse
          ? submissionResponse.error
            ? this.renderError(submissionResponse.error)
            : this.renderSuccess(submissionResponse.message)
          : null}
      </div>
    );
  }
}
export const mapStateToProps = ({
  inputError,
  submissionWork,
  apiInProgress,
  submissionResponse
}) => ({
  inputError,
  submissionWork,
  apiInProgress,
  submissionResponse
});

export const mapDispatchToProps = dispatch => ({
  sendSubmission: submissionWork => dispatch(sendWork(submissionWork)),
  clearResponse: () => dispatch(clearSubmissionResponse())
});

export default connect(mapStateToProps, mapDispatchToProps)(Submissions);
