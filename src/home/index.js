import React, { Component } from "react";
import MissionVision from "./MissionVision";
import "./index.css";
import icon from "../assets/images/parchment1.svg";
import scroll from "../assets/images/scroll.svg";

export class Home extends Component {
  render() {
    return (
      <div className="home__container">
        <div className="description">
          <img src={icon} alt="Project icon" />
          <p>
            <em>
              In the eighteenth century, the tea house would be a forum for
              intellectual encounters. They would read books and circulate
              magazines, talk about ideas, discoveries, and science while they
              are drinking their tea.
            </em>
          </p>
          <p>
            <em>
              In the same idea of a tea house, this magazine is a space where
              Rwandan young artists and writers meet to produce and discuss
              creative works. We focus on contemporary art and literature by
              publishing individual pieces such as short stories and poems, and
              works in collections such as collections of poetry and collections
              of photography.
            </em>
          </p>
        </div>
        <div className="scroll__icon">
          <img src={scroll} alt="Project icon" />
        </div>
        <div className="mission_vision__container">
          <MissionVision />
        </div>
      </div>
    );
  }
}
export default Home;
