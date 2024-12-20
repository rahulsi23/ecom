import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  fetchProducts,
} from "../../../../../redux/slices/productSlice";
import { fetchCategories } from "../../../../../redux/slices/categorySlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null); // Handle file input

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories?.items || []);

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch categories when the component mounts
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discountPrice", discountPrice);
    formData.append("category", category);
    if (image) formData.append("image", image);

    // Log form data values
    console.log("Form Data:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value); // Logs key-value pairs
    }

    try {
      await dispatch(addProduct(formData)).unwrap(); // Dispatch addProduct thunk
      alert("Product added successfully!");
      dispatch(fetchProducts()); // Refresh the product list
      navigate("/admin/product-list");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to add product: " + error.message);
    }
  };

  return (
    <div className="p-3">
      <h2 className="text-center">Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Product Name */}
        <div className="form-group mb-3">
          <label htmlFor="productName">Product Name:</label>
          <input
            id="productName"
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="form-group mb-3">
          <label htmlFor="productDescription">Description:</label>
          <textarea
            id="productDescription"
            className="form-control"
            placeholder="Enter Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            required
          ></textarea>
        </div>

        {/* Price */}
        <div className="form-group mb-3">
          <label htmlFor="productPrice">Price:</label>
          <input
            id="productPrice"
            type="number"
            className="form-control"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Discount Price */}
        <div className="form-group mb-3">
          <label htmlFor="productDiscountPrice">Discount Price:</label>
          <input
            id="productDiscountPrice"
            type="number"
            className="form-control"
            placeholder="Enter Discount Price"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            required
          />
        </div>

        {/* Category */}
        <div className="form-group mb-3">
          <label htmlFor="productCategory">Category:</label>
          <select
            id="productCategory"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image */}
        <div className="form-group mb-3">
          <label htmlFor="productImage">Image:</label>
          <input
            id="productImage"
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
