import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Arrow = ({ onClick, currentPage, totalPages }) => {
  return (
    <div className="page-number-container">
      {currentPage > 1 ? (
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          size="lg"
          onClick={() => onClick(-1)}
        />
      ) : null}
      <span className="page-number">
        {currentPage}/{totalPages}
      </span>
      {currentPage < totalPages ? (
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
          size="lg"
          onClick={() => onClick(1)}
        />
      ) : null}
    </div>
  );
};

export default Arrow;
