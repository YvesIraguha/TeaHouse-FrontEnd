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
      body="We are on a mission of exhibiting Rwandan literature with the finest literary and artistic merit that also incites a social change."
    />
    <Item
      title="Our Vision"
      body="We have a vision of exhibiting at least ten finest emerging writers each year and publishing one issue per year."
    />
  </div>
);

export default MissionVision;
