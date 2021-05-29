import React from "react";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const params = {
      q: category,
      limit: 10,
      api_key: "C5NwjWaDX2G3sZZVj5grW5eQm7qSon4i",
    };
    const endpoint = "https://api.giphy.com/v1/gifs/search";
    var queryString = Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");
    const url = `${endpoint}?${queryString}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
