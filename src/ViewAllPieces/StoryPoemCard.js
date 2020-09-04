import React, { Component } from "react";
import "./index.css";
import convertToHtml from "../utils/stringToHtml";
class StoryPoemCard extends Component {
  render() {
    const {
      piece: { title, author, body, id },
      onClick,
    } = this.props;

    return (
      <div className="story-card" onClick={() => onClick(id)}>
        <div className="story-head">
          <h3>{author.toUpperCase()}</h3>
          <div className="head-separator" />
          <h3>{title.toUpperCase()}</h3>
        </div>
        <div className="story-content">{convertToHtml(body.slice(0, 250))}</div>
      </div>
    );
  }
}

export default StoryPoemCard;
