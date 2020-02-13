import React, { useState } from "react";
import { connect } from "react-redux";
import { createCollectionActionCreator } from "../redux/actionsCreators/createCollectionsActionCreator";
import Input from "../Common/Input";
import Selector from "../Common/Selector";
import UploadButton from "../Common/UploadButton";
import Button from "../Common/Button";
import "./index.css";
import { validateCreatedCollection } from "../utils/validations";
import { renderResponseOrError } from "../utils/renderToast";

const CreateCollections = props => {
  const options = ["Book series", "Issues"];
  const {
    createCollection: { apiInProgress, createCollectionResponse }
  } = props;
  const [collection, setCollection] = useState({ type: "Book series" });
  const [errors, setErrors] = useState({});
  const handleInputChange = (name, value) => {
    setCollection({ ...collection, [name]: value });
  };

  const submitCollection = () => {
    const { sendCollection, history } = props;
    const error = validateCreatedCollection(collection);
    if (error) {
      return setErrors({ ...error });
    }
    sendCollection(collection, history);
  };
  if (createCollectionResponse) {
    renderResponseOrError(createCollectionResponse);
  }

  return (
    <div className="column create-collection">
      <div className="intro">
        <h4>Upload a Book/Issue</h4>
      </div>
      <Input
        name="title"
        title="Book title"
        error={errors.title}
        onChangeHandler={handleInputChange}
      />
      <Input
        name="author"
        title="Book author's name"
        error={errors.author}
        onChangeHandler={handleInputChange}
      />
      <UploadButton
        name="file"
        onChangeHandler={handleInputChange}
        title="Select file"
        type=".pdf"
        error={errors.file}
      />
      <UploadButton
        name="previewImage"
        type="image/*"
        onChangeHandler={handleInputChange}
        title="Select preview image"
        error={errors.previewImage}
      />
      <Selector options={options} onSelectorChange={handleInputChange} />
      <Button
        title="Submit"
        onClick={submitCollection}
        disabled={apiInProgress}
      />
    </div>
  );
};

const mapStateToProps = ({ createCollection }) => ({
  createCollection
});
const mapDispatchToProps = dispatch => ({
  sendCollection: (newCollection, history) =>
    dispatch(createCollectionActionCreator(newCollection, history))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateCollections);
