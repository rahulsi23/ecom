import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, updateCategory } from '../../../../../redux/slices/categorySlice';

const EditCategory = () => {
  const { id } = useParams(); // Category ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state selectors
  const category = useSelector((state) =>
    state.categories.items.find((cat) => cat._id === id)
  );
  const status = useSelector((state) => state.categories.status);
  const message = useSelector((state) => state.categories.message);

  // Local state for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize form fields when the category is fetched
  useEffect(() => {
    if (category) {
      setName(category.name || '');
      setDescription(category.description || '');
    } else {
      dispatch(fetchCategories());
    }
  }, [category, dispatch]);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      alert('Both fields are required.');
      return;
    }

    setLoading(true);
    try {
      await dispatch(updateCategory({ id, updatedCategory: { name, description } })).unwrap();
      alert('Category updated successfully!');
      navigate('/admin/category');
    } catch (error) {
      console.error('Failed to update category:', error.message);
      alert('Error updating category. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle loading and error states
  if (status === 'loading' || loading) {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-danger">Error: {message}</div>;
  }

  return (
    <div className="p-3">
      <h2>Edit Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            className="form-control"
            placeholder="Enter Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Category'}
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
