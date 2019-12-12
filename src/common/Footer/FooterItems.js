import React from "react";

export const Item = ({ title, image }) => (
  <div className="list_item row">
    <img src={image} alt="Arrow" />
    <p>{title}</p>
  </div>
);

const FooterItems = ({ firstItem, secondItem, thirdItem }) => {
  return (
    <div>
      <Item {...firstItem} />
      <Item {...secondItem} />
      <Item {...thirdItem} />
    </div>
  );
};

export default FooterItems;
