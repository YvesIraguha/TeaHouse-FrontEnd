import React from "react";
import { shallow } from "enzyme";
import Footer from "../index";

describe("Navigation bar", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
