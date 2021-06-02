import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Tests on AddCategory component", function () {
  const onAddCategory = jest.fn();
  const changeEvent = {
    target: {
      value: "Hola mundo",
    },
  };
  const submitEvent = {
    preventDefault() {},
  };

  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory onAddCategory={onAddCategory} />);
  });

  it("component should show correctly", function () {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change newCategory state", function () {
    expect(wrapper.find("input").props().value).toEqual("");
    wrapper.find("input").simulate("change", changeEvent);
    expect(wrapper.find("input").props().value).toEqual(
      changeEvent.target.value
    );
  });

  it("should not call onAddCategory on submit if newCategory if empty", function () {
    wrapper.find("form").simulate("submit", submitEvent);
    expect(onAddCategory).not.toHaveBeenCalled();
  });

  it("should call onAddCategory on and clean newCategory on submit if newCategory if not empty", function () {
    wrapper.find("input").simulate("change", changeEvent);
    expect(wrapper.find("input").props().value).toEqual(
      changeEvent.target.value
    );
    wrapper.find("form").simulate("submit", submitEvent);
    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledWith(changeEvent.target.value);
    expect(wrapper.find("input").props().value).toEqual("");
  });
});
