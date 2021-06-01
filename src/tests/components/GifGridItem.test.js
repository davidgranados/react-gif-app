import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Tests on <GifGridItem />", function () {
  const title = "a title";
  const url = "https://localhost.com/something.jpg";
  it("should show the component correctly", function () {
    const wrapper = shallow(<GifGridItem id={"1"} title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
