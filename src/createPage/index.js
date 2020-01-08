import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./index.css";
import Selector from "../common/Selector";
import Button from "../common/Button";
import { connect } from "react-redux";
import { createStoryPoemHandler } from "../redux/actionsCreators/createStoryPoem";
import { renderResponseOrError } from "../utils/renderToast";
import { validateCreatedWork } from "../utils/validations";
import Input from "./Input";
class CreatePage extends Component {
  state = {
    content: "",
    title: "",
    type: "Short story",
    author: "",
    errors: {}
  };
  handleEditorChange = content => {
    this.setState({ content });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { content, title, type, author } = this.state;
    const { submitStoryOrPoem, history } = this.props;
    const error = validateCreatedWork(content, title, author);
    if (error) {
      return this.setState({ errors: { ...error } });
    }
    submitStoryOrPoem(content, title, type, author, history);
  };

  componentWillReceiveProps = nextProps => {
    const { createStoryPoem } = nextProps;
    if (
      createStoryPoem.creationResponse &&
      createStoryPoem.creationResponse !==
        this.props.createStoryPoem.creationResponse
    ) {
      renderResponseOrError(createStoryPoem.creationResponse);
    }
  };

  render() {
    const { content, title, errors, author } = this.state;
    const {
      createStoryPoem: { apiInProgress }
    } = this.props;

    return (
      <div className="create-story-container">
        <Input
          placeholder="Title goes here"
          name="title"
          value={title}
          onChange={e => this.onInputChange(e)}
          errors={errors}
        />
        <Input
          placeholder="Author's name goes here"
          name="author"
          value={author}
          onChange={e => this.onInputChange(e)}
          errors={errors}
        />
        <Selector onSelectorChange={this.onInputChange} />
        <p className="error">{errors.content}</p>
        <Editor
          value={content}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
              "autoresize"
            ],
            toolbar:
              "undo redo | fontselect fontsizeselect formatselect | bold italic underline backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help"
          }}
          onEditorChange={this.handleEditorChange}
        />
        <Button
          title="Publish"
          disabled={apiInProgress}
          onClick={this.onSubmit}
          className="btn-publish"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ createStoryPoem }) => ({ createStoryPoem });

const mapDispatchToProps = dispatch => ({
  submitStoryOrPoem: (content, title, type, author, history) =>
    dispatch(createStoryPoemHandler(content, title, type, author, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
