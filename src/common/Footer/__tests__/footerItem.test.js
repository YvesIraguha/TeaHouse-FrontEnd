import React from "react";
import { shallow } from "enzyme";
import FooterItems, { Item } from "../FooterItems";

describe("Footer items", () => {
  it("should match the snapshot", () => {
    const props = {
      firstItem: { title: "Stories", image: "hello.svg" },
      secondItem: { title: "Poems", image: "hello.svg" },
      thirdItem: { title: "Book series", image: "hello.svg" }
    };
    const wrapper = shallow(<FooterItems {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Footer item", () => {
  it("should match the snapshot", () => {
    const props = {
      title: "Stories",
      image: "hello.svg"
    };
    const wrapper = shallow(<Item {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
