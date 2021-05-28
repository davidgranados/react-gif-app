import React, { useState } from "react";

const GifExpertApp = () => {
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);
  const handleNewCategoryChange = ({target}) => {
    setNewCategory(target.value);
  };
  const handleAddCategory = () => {
    setCategories((prevState) => [...prevState, newCategory]);
    setNewCategory('');
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <input type="text" onChange={handleNewCategoryChange} value={newCategory}/>
      <button onClick={handleAddCategory}>Add New Category</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
