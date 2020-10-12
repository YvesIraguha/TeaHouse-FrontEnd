import React, { useState } from "react";
import "./index.css";
import Item from "./AdminNavBarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IndividualPieces from "./IndividualPieces";
import Collections from "./Collections";
import Drawer from "./LeftDrawer";

const AdminDashboard = ({ history }) => {
  const [activeContent, setActiveContent] = useState("Short story");

  const changeActiveContent = (newContent) => {
    setActiveContent(newContent);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <>
      <Drawer logout={logOut} />
      <div className="admin-page row">
        {/* <div className="admin-content">
        {isCollection ? (
          <Collections activeContent={activeContent} />
        ) : (
          <IndividualPieces activeContent={activeContent} />
        )}
      </div> */}
      </div>
    </>
  );
};

export default AdminDashboard;
