import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Tests on GifGrid Component", function () {
  const category = "marvel";
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render correctly", function () {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should show items if useFetchGifs return objects", function () {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa1.jpg",
        title: "Cualquier cosa 1",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa2.jpg",
        title: "Cualquier cosa 2",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow( <GifGrid category={ category } /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  });
});
