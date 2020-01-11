import React, { Component } from "react";
import "./index.css";
import convertToHtml from "../utils/stringToHtml";
class StoryPoemCard extends Component {
  render() {
    const { title, author, body } = this.props.piece;
    return (
      <div className="story-card">
        <div className="story-head">
          <h3>{author.toUpperCase()}</h3>
          <div className="head-separator" />
          <h3>{title.toUpperCase()}</h3>
        </div>
        <div className="story-content">{convertToHtml(body.slice(0, 150))}</div>
      </div>
    );
  }
}

export default StoryPoemCard;
