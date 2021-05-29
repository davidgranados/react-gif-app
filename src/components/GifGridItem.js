import React from 'react';

const GifGridItem = ({id, title, url}) => {
  return (
    <div id={id}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
