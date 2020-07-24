import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ title, onClick, type }) => {
  return (
    <div className="admin-navbar__item row" onClick={() => onClick(type)}>
      <FontAwesomeIcon icon={faBook} size="lg" color="rgba(0,0,0,0.25)" />
      <span className="item__title">{title}</span>
    </div>
  );
};

export default Item;
