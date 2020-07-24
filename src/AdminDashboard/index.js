import React, { useState } from "react";
import "./index.css";
import Item from "./AdminNavBarItem";
import NewPiece from "./NewPiece";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import IndividualPieces from "./IndividualPieces";
import Collections from "./Collections";

const AdminDashboard = ({ history }) => {
  const [activeContent, setActiveContent] = useState("Short story");

  const changeActiveContent = (newContent) => {
    console.log({ newContent });
    setActiveContent(newContent);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  const isCollection = ["Issues", "Book series"].includes(activeContent);
  return (
    <div className="admin-page row">
      <div className="admin-navbar column">
        <div className="admin-navbar__title row">
          <h1>TEAHOUSE</h1>
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            color="rgba(186, 160, 160,0.8)"
          />
        </div>
        <div>
          <Item
            title="STORIES"
            onClick={changeActiveContent}
            type="Short story"
          />
          <Item title="POEMS" onClick={changeActiveContent} type="Poem" />
          <Item
            title="BOOK SERIES"
            onClick={changeActiveContent}
            type="Book series"
          />
          <Item title="ISSUES" onClick={changeActiveContent} type="Issues" />
          <Item
            title="INTERVIEWS"
            onClick={changeActiveContent}
            type="Interview"
          />
          <Item
            title="LIT NEWS"
            onClick={changeActiveContent}
            type="Lit news"
          />
          <Item title="GOSSIPING" onClick={changeActiveContent} type="Gossip" />
        </div>
        <div className="logout-btn" onClick={logOut}>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size="lg"
            color="rgba(0,0,0,0.25)"
          />
          <span className="item__title">LOGOUT</span>
        </div>
      </div>
      <div>
        {isCollection ? (
          <Collections activeContent={activeContent} />
        ) : (
          <IndividualPieces activeContent={activeContent} />
        )}
      </div>
      <NewPiece />
    </div>
  );
};

export default AdminDashboard;
