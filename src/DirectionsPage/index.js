import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import Input from "../Common/Input";
import UploadButton from "../Common/UploadButton";
import Button from "../Common/Button";
import Selector from "../Common/Selector";
import ShortStories from "./ShortStories";
import Poems from "./Poems";
import BookSeries from "./BookSeries";
import Images from "./Images";
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
  onSelectorChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onFileChange = (name, value) => {
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
    const options = ["Shorty story", "Poem", "Book series", "Issue"];
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
            </div>
            <div className="row buttons">
              <UploadButton
                onChangeHandler={this.onFileChange}
                error={errors.file}
              />
              <Selector
                onSelectorChange={this.onSelectorChange}
                options={options}
              />
            </div>
          </div>
          <div className="row submit_btn">
            <Button
              title="Submit"
              onClick={this.submitWork}
              disabled={apiInProgress}
            />
          </div>
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
