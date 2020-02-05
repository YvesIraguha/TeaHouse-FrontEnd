import React from "react";
import "./index.css";
import convertToReadableDate from "../utils/convertDate";

const Book = props => {
  const {
    collection: { previewUrl, collectionUrl, title, author, createdAt }
  } = props;

  return (
    <div className="book-card">
      <img src={previewUrl} alt="" className="book_preview_image" />
      <a href={collectionUrl} rel="noopener noreferrer" target="_blank">
        {title}
      </a>
      <p>Author: {author}</p>
      <p>Published: {convertToReadableDate(createdAt)}</p>
    </div>
  );
};

export default Book;
