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
      firstItem={{ title: "Guidelines", image: rules, link: "/directions" }}
      secondItem={{
        title: "Submissions",
        image: submissions,
        link: "/submissions",
      }}
      thirdItem={{
        title: "Collections",
        image: folder,
        link: "/book-series",
      }}
    />
    <FooterItems
      firstItem={{ title: "Stories", image: stories, link: "/short-stories" }}
      secondItem={{ title: "Poems", image: reading, link: "/poems" }}
      thirdItem={{ title: "Book series", image: books, link: "/book-series" }}
    />
    <FooterItems
      firstItem={{ title: "teahouseeditor@gmail.com", image: envelope }}
      secondItem={{ title: "Kigali, Rwanda", image: placeholder }}
      thirdItem={{ title: "+250788595704", image: phone }}
    />
  </div>
);

export default Footer;
