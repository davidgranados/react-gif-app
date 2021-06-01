import React from 'react';
import PropTypes from "prop-types";

const GifGridItem = ({id, title, url}) => {
  return (
    <div id={id} className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default GifGridItem;
