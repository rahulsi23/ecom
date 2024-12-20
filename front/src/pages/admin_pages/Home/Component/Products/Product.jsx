import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../../../../redux/slices/productSlice";
import { Link } from "react-router-dom";
import { admin_routes } from "../../../../../routes/route.jsx";
import { FaEdit, FaTrash } from "react-icons/fa";

const Product = () => {
  const dispatch = useDispatch();

  // Access the products state
  const { items: products = [], status, message } = useSelector((state) => state.products || {});

  useEffect(() => {
    // Fetch products on mount
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await dispatch(deleteProduct(id)).unwrap();
      alert("Product deleted successfully!");
    } catch (error) {
      alert("Failed to delete product: " + error.message);
    }
  };

  return (
    <div className="p-3">
      <h2 className="mb-3 text-center">Products</h2>
      <Link to={admin_routes.add_product.path} className="btn btn-success mb-3">
        Add New
      </Link>

      {status === "loading" && <p>Loading products...</p>}
      {status === "failed" && <p className="text-danger">Error: {message}</p>}

      {status === "succeeded" && products.length > 0 ? (
        <div className="table-responsive mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discount Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  {/* Display product image */}
                  <td>
                    <img
                    src={product.image || "https://via.placeholder.com/50"}
                      alt={product.name}
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>${Number(product.price).toFixed(2)}</td>
                  <td>${Number(product.discountPrice).toFixed(2)}</td>
                  <td>{product.category?.name || "Uncategorized"}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={admin_routes.edit_product.path.replace(":id", product._id)}
                        className="btn btn-link p-0 me-2"
                        title="Edit Product"
                      >
                        <FaEdit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-link text-danger p-0"
                        title="Delete Product"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        status === "succeeded" && (
          <p className="text-center">No products found. Add a new product to get started.</p>
        )
      )}
    </div>
  );
};

export default Product;
