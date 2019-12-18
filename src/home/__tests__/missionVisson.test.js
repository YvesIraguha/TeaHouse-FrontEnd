import React from "react";
import { shallow } from "enzyme";
import MissionVision, { Item } from "../MissionVision";

describe("Mission Vision component", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<MissionVision />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Mission Vision Item", () => {
  it("should match the snapshot", () => {
    const props = { title: "Vision ", body: "This is our vision" };

    const wrapper = shallow(<Item {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
