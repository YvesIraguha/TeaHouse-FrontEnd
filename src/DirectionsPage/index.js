import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import ShortStories from "./ShortStories";
import Poems from "./Poems";
import BookSeries from "./BookSeries";
import Images from "./Images";
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
      Each poem or photograph in its respective collection must be the original
      work of the author, might be previously published or unpublished.
    </p>
    <h2>Poets’ Bar Book Series (Collections of Poetry)</h2>
    <BookSeries />
    <h2>Photographers’ Bar Book Series (Collections of Photography)</h2>
    <Images />
    <h1> Submitting an Issue</h1>
    <p>
      Our issues will be tentatively an annual themed issue. Currently, we would
      like to receive your poems, short stories, essays, articles, songs,
      photographs, paintings, just any piece of high artistic and literary merit
      on the title We Need New Names. We Need New Names is a novel by NoViolet
      Bulawayo, a Zimbabwean author. Even though we do not want to imitate the
      themes she explores in the novel, we want to explore another side of what
      the title might imply, that we need new names, to be precise, in
      presidential offices. In the East African Community, we have been
      struggling with the problem of presidents who hold onto power. We do not
      want to explain about these presidents. It will be your delight to explore
      and explain it. With the title of the issue, We Need New Names, our side
      on the problem is implied, proudly against.
    </p>
  </div>
);
