import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({onAddCategory}) => {
  const [newCategory, setNewCategory] = useState('');
  const handleNewCategoryChange = ({target}) => {
    setNewCategory(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim().length > 2) {
      onAddCategory(newCategory);
      setNewCategory('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleNewCategoryChange} value={newCategory}/>
      <button type="submit">Add New Category</button>
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
};

export default AddCategory;
