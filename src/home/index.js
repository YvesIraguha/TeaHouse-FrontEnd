import React, { Component } from "react";
import MissionVision from "./MissionVision";
import "./index.css";
import scroll from "../assets/images/scroll.svg";

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
            <h1 className="about_section__title">About</h1>
            <p>
              In the eighteenth century, a tea house would be a forum for
              intellectual encounters. They would read books and circulate
              magazines, talk about ideas, discoveries, and science while
              drinking their tea.
            </p>
            <p>
              In the same idea of a tea house, this magazine is a space where
              Rwandan writers meet to produce and discuss creative works. We
              focus on contemporary literature in the form of short stories,
              poems, essays, and poetry chapbooks.
            </p>
          </div>
        </div>
        <div className="scroll__icon">
          <img src={scroll} alt="Project icon" />
        </div>
        <div className="mission_vision__container">
          <MissionVision />
        </div>
        <div className="team_members__section">
          <h1>TEAHOUSE TEAM</h1>
          <div className="team_member__image">
            <img
              src={
                "https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
            />
          </div>
          <h2>Joe Doe</h2>
          <h3>Founder & Reviewer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            quisque ullamcorper pulvinar cursus nascetur sem faucibus urna. Nibh
            proin viverra in non.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
