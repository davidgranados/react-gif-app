import React from 'react';
import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Tests on <GifGridItem />', function () {
  it('should show the component correctly', function () {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
