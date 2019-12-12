import React from "react";

export const Item = ({ title, body }) => (
  <div className="mission_vision">
    <div>
      <h2>{title}</h2>
      <p>
        <i>"{body}"</i>
      </p>
    </div>
  </div>
);

const MissionVision = () => (
  <div className="row">
    <Item
      title="Our Mission"
      body="A diam maecenas sed enim ut sem viverra aliquet. Sit amet dictum sit amet justo donec enim. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo."
    />
    <Item
      title="Our Vision"
      body="A diam maecenas sed enim ut sem viverra aliquet. Sit amet dictum sit amet justo donec enim. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo."
    />
  </div>
);

export default MissionVision;
