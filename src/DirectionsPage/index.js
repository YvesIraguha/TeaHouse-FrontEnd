import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ShortStories from "./ShortStories";
import Poems from "./Poems";
// import BookSeries from "./BookSeries";

export default () => (
  <div className="submissions__container">
    <div className="welcome__section">
      <h1>Welcome to Tea House</h1>
      <p>
        Tea House accepts submissions via our{" "}
        <Link to="/submissions">submission form </Link>. All submissions must be
        in English. To submit, follow the guidelines below.
      </p>
    </div>
    <h1>Submitting an Individual Piece</h1>
    <h2>Essays or short stories</h2>
    <ShortStories />
    <h2>Poems</h2>
    <Poems />

    {/* <BookSeries /> */}

    <h1> Submitting for an Issue</h1>
    <p>
      Our issues will be tentatively an annual themed issue. Currently, there is
      no call for submission.
    </p>
    <h1>Gossiping while Sipping on Tea!</h1>
    <p>
      This is a section for gossip! It captures interesting news from the
      mainstream, boils it in a kettle, and serves it in mugs like tea. Welcome
      to the tea house!
    </p>
    <p>
      [Translation: These will be blog posts in the form of short plays. We will
      pick up interesting stories from around the Rwandan mainstream, and
      imagine them in a fictionalized way, then create out of them our own
      stories. With the photographic law that in public there is no privacy, we
      may decide to use in our plays the original names of the individuals
      involved in the news stories we pick, or mention the news story and then
      create our own fictionalized names. The series will be run by the editor
      or anyone who is interested, who, if so, should submit their play via the
      usual submissions form.]
    </p>
  </div>
);
