import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./index.css";
import Selector from "../Common/Selector";
import Button from "../Common/Button";
import { connect } from "react-redux";
import { createStoryPoemHandler } from "../redux/actionsCreators/createDeleteStoryPoem";
import { individualPieceHandler } from "../redux/actionsCreators/individualPieceHandler";
import { editPieceActionHandler } from "../redux/actionsCreators/editPiece";
import { renderResponseOrError } from "../utils/renderToast";
import { validateCreatedWork } from "../utils/validations";
import Input from "./Input";
import editorConfig from "./editorConfigurations";

class CreatePage extends Component {
  state = {
    content: "",
    title: "",
    type: "Short story",
    author: "",
    errors: {},
    editMode: false
  };
  componentDidMount = async () => {
    const {
      fetchIndividualPiece,
      match: {
        params: { id }
      },
      history
    } = this.props;
    if (id) {
      const response = await fetchIndividualPiece(id, history);
      const {
        data: {
          individualPiece: { title, type, body, author }
        }
      } = response;
      this.setState({ title, type, author, editMode: true, content: body });
    }
  };

  handleEditorChange = content => {
    this.setState({ content });
  };

  onInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { content, title, type, author, editMode } = this.state;
    const {
      submitStoryOrPoem,
      editPiece,
      history,
      match: {
        params: { id }
      }
    } = this.props;
    const error = validateCreatedWork(content, title, author);
    if (error) {
      return this.setState({ errors: { ...error } });
    }
    if (editMode) {
      return editPiece(id, content, title, type, author, history);
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
    const { content, title, errors, author, editMode, type } = this.state;
    const {
      createStoryPoem: { apiInProgress }
    } = this.props;
    const options = ["Short story", "Poem"];
    return (
      <div className="create-story-container">
        <Input
          placeholder="Title goes here"
          name="title"
          value={title}
          onChange={e => this.onInputChange(e.target.name, e.target.value)}
          errors={errors}
        />
        <Input
          placeholder="Author's name goes here"
          name="author"
          value={author}
          onChange={e => this.onInputChange(e.target.name, e.target.value)}
          errors={errors}
        />
        <Selector
          onSelectorChange={this.onInputChange}
          value={type}
          options={options}
        />
        <p className="error">{errors.content}</p>
        <Editor
          value={content}
          init={editorConfig}
          onEditorChange={this.handleEditorChange}
        />
        <Button
          title={editMode ? "Save" : "Publish"}
          disabled={apiInProgress}
          onClick={this.onSubmit}
          className="btn-publish"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ createStoryPoem }) => ({
  createStoryPoem
});

const mapDispatchToProps = dispatch => ({
  submitStoryOrPoem: (content, title, type, author, history) =>
    dispatch(createStoryPoemHandler(content, title, type, author, history)),
  editPiece: (pieceId, content, title, type, author, history) =>
    dispatch(
      editPieceActionHandler(pieceId, content, title, type, author, history)
    ),
  fetchIndividualPiece: (pieceId, history) =>
    dispatch(individualPieceHandler(pieceId, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
