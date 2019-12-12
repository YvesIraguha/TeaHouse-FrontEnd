import React from "react";
import { shallow } from "enzyme";
import { Home } from "../index";

describe("index component", () => {
  it("should render the home component", () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
