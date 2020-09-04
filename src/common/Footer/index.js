import React from "react";
import { Link } from "react-router-dom";
import FooterItems from "./FooterItems";
import "./index.css";
import { column1, column2, column3, row4 } from "./columnData";

const Footer = () => (
  <div className="footer">
    <div className="row1 row">
      <FooterItems items={column1} />
      <FooterItems items={column2} />
      <FooterItems items={column3} />
    </div>

    <div className="social-media row">
      {row4.map(({ Icon, link, title }, index) => (
        <div className="list_item row" key={index}>
          <Icon color="white" size="small" />
          {link ? <Link to={link}>{title}</Link> : <p>{title}</p>}
        </div>
      ))}
    </div>
  </div>
);

export default Footer;
