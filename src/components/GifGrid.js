import React from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      {!!gifs.length && (
        <div className="card-grid">
          {gifs.map((gif) => (
            <GifGridItem key={gif.id} {...gif} />
          ))}
        </div>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
