import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
import PropTypes from "prop-types";

const GifExpertApp = ({defaultCategories}) => {
  const [categories, setCategories] = useState(defaultCategories);
  const onAddCategory = (newCategory) => {
    setCategories((prevState) => [newCategory, ...prevState]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.array,
}
GifExpertApp.defaultProps  = {
  defaultCategories: [],
}

export default GifExpertApp;
