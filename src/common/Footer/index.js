import React from "react";
import FooterItems from "./FooterItems";
import "./index.css";
import envelope from "../../assets/images/email.svg";
import placeholder from "../../assets/images/location.svg";
import phone from "../../assets/images/phone-call.svg";
import books from "../../assets/images/books-stack-of-three.svg";
import reading from "../../assets/images/reading.svg";
import stories from "../../assets/images/short.svg";
import folder from "../../assets/images/folder.svg";
import submissions from "../../assets/images/submissions.svg";
import rules from "../../assets/images/rules.svg";

const Footer = () => (
  <div className="footer row">
    <FooterItems
      firstItem={{ title: "Guidelines", image: rules }}
      secondItem={{ title: "Submissions", image: submissions }}
      thirdItem={{ title: "Collections", image: folder }}
    />
    <FooterItems
      firstItem={{ title: "Stories", image: stories }}
      secondItem={{ title: "Poems", image: reading }}
      thirdItem={{ title: "Book series", image: books }}
    />
    <FooterItems
      firstItem={{ title: "joedoe@gmail.com", image: envelope }}
      secondItem={{ title: "Kigali, Rwanda", image: placeholder }}
      thirdItem={{ title: "+250780093893", image: phone }}
    />
  </div>
);

export default Footer;
