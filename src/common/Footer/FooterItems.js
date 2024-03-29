import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ title, image, link }) => (
  <div className="list_item row">
    <img src={image} alt="Arrow" />
    {link ? <Link to={link}>{title}</Link> : <p>{title}</p>}
  </div>
);

const FooterItems = ({ items }) => {
  return (
    <div>
      {items.map((content, index) => (
        <Item {...content} key={index} />
      ))}
    </div>
  );
};

export default FooterItems;
