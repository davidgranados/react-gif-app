import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Tests on <GifGridItem />", function () {
  const title = "a title";
  const url = "https://localhost.com/something.jpg";
  const wrapper = shallow(<GifGridItem id={"1"} title={title} url={url} />);

  it("should show the component correctly", function () {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a p with the title", function () {
    const p = wrapper.find("p");
    console.log(p.text());
    expect(p.text().trim()).toEqual(title);
  });

  it("should contains an img with the src and alt equals to the props url and title respectively", function () {
    const img = wrapper.find("img");
    console.log(img.html());
    console.log(img.props());
    console.log(img.prop("src"));
    console.log(img.prop("alt"));
    expect(img.prop("src")).toEqual(url);
    expect(img.prop("alt")).toEqual(title);
  });

  it('should have the card class', function () {
    const className = wrapper.prop("className");

    // multiple ways to do the same
    expect(className.includes("card")).toEqual(true);
    expect(wrapper.prop("className")).toContain("card");
    expect(wrapper.hasClass("card")).toEqual(true);
  });
});
