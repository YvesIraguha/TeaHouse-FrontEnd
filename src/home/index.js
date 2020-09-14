import React, { Component } from "react";
import MissionVision from "./MissionVision";
import "./index.css";

export class Home extends Component {
  render() {
    return (
      <div className="home__container">
        <div className="image-box">
          <div className="image-box__background"></div>
          <div className="image-box__overlay"></div>
          <div className="image-box__content">
            <h3>Exhibiting Works of Rwandan Writers</h3>
          </div>
        </div>
        <div className="description">
          <div id="about">
            <p>
              In the eighteenth century, a tea house was a forum for
              intellectual encounters. They read books and circulated magazines,
              talked about ideas, discoveries, and science while drinking their
              tea.
            </p>
            <p>
              In the same idea of a tea house, this magazine is a space where
              Rwandan writers meet to produce and discuss creative works. We
              focus on contemporary literature in the form of short stories,
              poems, essays, and poetry chapbooks.
            </p>
          </div>
        </div>
        <div className="mission_vision__container">
          <MissionVision />
        </div>
        <div className="team_members__section">
          <h1 className="founder">Founder/Editor</h1>
          <p>
            Alain-Jules has work in{" "}
            <i>The Carolina Quarterly, Lolwe, Jalada.</i> It is forthcoming
            through <i>Wasafiri and 20.35 Africa</i>: An Anthology of
            Contemporary Poetry. He is pursuing an MFA in poetry at{" "}
            <i>Texas State University.</i>
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
