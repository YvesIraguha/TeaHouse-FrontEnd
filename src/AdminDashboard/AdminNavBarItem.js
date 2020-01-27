import React from "react";

const Item = ({ title, onClick, type }) => (
  <div className="admin-navbar__item row" onClick={() => onClick(type)}>
    <span className="item__title">{title}</span>
  </div>
);

export default Item;
