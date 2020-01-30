import React, { useState } from "react";
import { connect } from "react-redux";
import { createCollectionActionCreator } from "../redux/actionsCreators/createCollectionsActionCreator";
import Input from "../Common/Input";
import Selector from "../Common/Selector";
import UploadButton from "../Common/UploadButton";
import Button from "../Common/Button";
import "./index.css";
import { validateCreatedCollection } from "../utils/validations";

const CreateCollections = props => {
  const options = ["Book series", "Issue"];
  const [collection, setCollection] = useState({ type: "Book series" });
  const [errors, setErrors] = useState({});
  const handleInputChange = (name, value) => {
    setCollection({ ...collection, [name]: value });
  };

  const submitCollection = () => {
    const { createCollection, history } = props;
    const error = validateCreatedCollection(collection);
    if (error) {
      return setErrors({ ...error });
    }
    createCollection(collection, history);
  };

  return (
    <div className="column create-collection">
      <div>
        <h4>Got a book to publish?</h4>
        <p>
          You can send a short story, poem, book series, and image collections
          book. Fill out the form below and submit your work to be reviewed by
          admin.
        </p>
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
        error={errors.file}
      />
      <UploadButton
        name="previewImage"
        onChangeHandler={handleInputChange}
        title="Select preview image"
        error={errors.previewImage}
      />
      <Selector options={options} onSelectorChange={handleInputChange} />
      <Button title="Submit" onClick={submitCollection} disabled={false} />
    </div>
  );
};

const mapStateToProps = ({ createCollectionResponse }) => ({
  createCollectionResponse
});
const mapDispatchToProps = dispatch => ({
  createCollection: (newCollection, history) =>
    dispatch(createCollectionActionCreator(newCollection, history))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateCollections);
