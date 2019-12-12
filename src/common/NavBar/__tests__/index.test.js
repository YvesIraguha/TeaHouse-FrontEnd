import React from "react";
import { shallow } from "enzyme";
import NavBar from "../index";

describe("Navigation bar", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
