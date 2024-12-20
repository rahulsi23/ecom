import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory,fetchCategories } from '../../../../../redux/slices/categorySlice';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.categories?.message || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await dispatch(addCategory({ name, description })).unwrap();
      setName("");
      setDescription("");
      alert("Category added successfully!");
  
      // Fetch the updated list of categories
      dispatch(fetchCategories());
  
      // Redirect to Categories page
      navigate("/admin/category");
    } catch (error) {
      alert("Failed to add category: " + error);
    }
  };
  

  return (
    <div className="p-3">
      <h2 className="text-center">Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="categoryName">Category Name:</label>
          <input
            id="categoryName"
            type="text"
            className="form-control"
            placeholder="Enter Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="categoryDescription">Description:</label>
          <input
            id="categoryDescription"
            type="text"
            className="form-control"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add Category
        </button>
      </form>
      {message && (
        <div className="alert alert-success mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default AddCategory;
