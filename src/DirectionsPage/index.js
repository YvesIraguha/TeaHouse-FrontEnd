import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import ShortStories from "./ShortStories";
import Poems from "./Poems";
import BookSeries from "./BookSeries";

export default () => (
  <div className="submissions__container">
    <div className="welcome__section">
      <h1>Welcome to Teahouse</h1>
      <p>
        The Tea House accepts submissions via our{" "}
        <Link to="/submissions">submission form </Link>. All submissions must be
        in English. To submit, follow the guidelines below.
      </p>
    </div>
    <h1>Submitting an Individual Piece</h1>
    <h2>Essays or short stories</h2>
    <ShortStories />
    <h2>Poems</h2>
    <Poems />
    <h1> Submitting a Collection</h1>
    <p>
      Each poem in a chapbook must be the original work of the author.
      Individual poems might be previously published or unpublished, but the
      whole chapbook must have not been published elsewhere before.
    </p>
    <BookSeries />

    <h1> Submitting for an Issue</h1>
    <p>
      Our issues will be tentatively an annual themed issue. Currently, there is
      no call for submission.
    </p>
  </div>
);
