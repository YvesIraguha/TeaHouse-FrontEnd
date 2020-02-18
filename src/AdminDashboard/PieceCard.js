import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import parachment from "../assets/images/parchment1.svg";
import {
  faTrash,
  faPen,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import convertToReadableDate from "../utils/convertDate";
import convertToHtml from "../utils/stringToHtml";

const PieceCard = ({
  createdAt,
  title,
  id,
  body,
  onDeletePiece,
  onEditPiece
}) => {
  return (
    <div className="piece-card row">
      <div className="cover-image">
        <img src={parachment} alt="" />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        {convertToHtml(body.slice(0, 150))}
        <div className="row time-stamp">
          <FontAwesomeIcon icon={faCalendarAlt} size="1x" color="#230D82" />
          <span>{convertToReadableDate(createdAt)}</span>
        </div>
      </div>
      <div className="icons row">
        <div className="icon row">
          <FontAwesomeIcon
            icon={faPen}
            size="lg"
            color="#230D82"
            onClick={() => onEditPiece(id)}
          />
        </div>
        <div className="icon row">
          <FontAwesomeIcon
            icon={faTrash}
            size="lg"
            color="#742602"
            className="icon"
            onClick={() => onDeletePiece(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default PieceCard;
