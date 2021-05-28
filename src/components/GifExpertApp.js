import React, { useState } from "react";
import AddCategory from "./AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);
  const onAddCategory = (newCategory) => {
    setCategories((prevState) => [...prevState, newCategory]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory onAddCategory={onAddCategory}/>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
