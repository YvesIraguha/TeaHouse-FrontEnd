import React from "react";
import { shallow } from "enzyme";
import NavBarItem from "../NavBarItem";

describe("Navigation bar items", () => {
  it("should match the snapshot", () => {
    const props = { title: "hello world", link1: "stories", link2: "poems" };
    const wrapper = shallow(<NavBarItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
