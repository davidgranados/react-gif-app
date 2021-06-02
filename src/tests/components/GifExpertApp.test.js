import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../../components/GifExpertApp";

describe("Tests on GifExpertApp", () => {
  test("should rended correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render a categories list", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid")).toHaveLength(categories.length);
  });
});
