import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    setCategories((prevState) => [...prevState, newCategory]);
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

export default GifExpertApp;
