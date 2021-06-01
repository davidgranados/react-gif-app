import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Tests on AddCategory component", function () {
  const wrapper = shallow(<AddCategory onAddCategory={() => {}} />);
  const event = {
    target: {
      value: "Hola mundo",
    },
  };
  it("component should show correctly", function () {
    expect(wrapper).toMatchSnapshot();
  });
  it("should change newCategory state", function () {
    expect(wrapper.find("input").props().value).toEqual("");
    wrapper.find("input").simulate("change", event);
    expect(wrapper.find("input").props().value).toEqual(event.target.value);
  });
});
