import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import convertToHtml from "../utils/stringToHtml";

const PieceCard = ({ title, id, body, onClick }) => {
  return (
    <div className="piece-card row">
      <div className="row">
        <h6>{title}</h6>
        {convertToHtml(body.slice(0, 70))}
      </div>
      <div className="icons row">
        <FontAwesomeIcon
          icon={faEdit}
          size="lg"
          color="#5131DE"
          className="icon"
        />
        <FontAwesomeIcon
          icon={faTrash}
          size="lg"
          color="#742602"
          className="icon"
          onClick={() => onClick(id)}
        />
      </div>
    </div>
  );
};

export default PieceCard;
