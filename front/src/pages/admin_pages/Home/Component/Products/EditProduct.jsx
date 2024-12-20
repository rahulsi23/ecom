import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../../../redux/slices/categorySlice';
import { fetchProducts, updateProduct } from '../../../../../redux/slices/productSlice';

const EditProduct = () => {
  const { id } = useParams(); // Product ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state selectors
  const product = useSelector((state) =>
    state.products.items.find((prod) => prod._id === id)
  );
  const categories = useSelector((state) => state.categories.items);
  const status = useSelector((state) => state.products.status);
  const message = useSelector((state) => state.products.message);

  // Local state for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize form fields when the product is fetched
  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setDescription(product.description || '');
      setPrice(product.price || '');
      setDiscountPrice(product.discountPrice || '');
      setCategory(product.category?._id || '');
      setImage(product.image || null);
    } else {
      dispatch(fetchProducts());
    }
    // Fetch categories for the dropdown
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [product, categories.length, dispatch]);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim() || !price || !discountPrice || !category) {
      alert('All fields are required.');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('discountPrice', discountPrice);
      formData.append('category', category);
      if (image) formData.append('image', image);

      await dispatch(updateProduct({ id, formData })).unwrap();
      alert('Product updated successfully!');
      navigate('/admin/product-list');
    } catch (error) {
      console.error('Failed to update product:', error.message);
      alert('Error updating product. Please try again.');
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
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group mb-3">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            className="form-control"
            placeholder="Enter Product Name"
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
        <div className="form-group mb-3">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            className="form-control"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="discountPrice">Discount Price:</label>
          <input
            type="number"
            id="discountPrice"
            className="form-control"
            placeholder="Enter Discount Price"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a Category
            </option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
           <img src={image} className="img-fluid" alt="" style={{'max-width': '100px',marginTop:'10px'}} />
        </div>
       
        
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Product'}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
