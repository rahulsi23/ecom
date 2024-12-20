import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure the toastify CSS is imported
import Sidebar from "./components/Sidebar";
import "./Product.css";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const dispatch = useDispatch();

  // Access the products state
  const { items: products = [], status, message } = useSelector(
    (state) => state.products || {}
  );

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Product Name");

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    return filter === "All" || product.category?.name === filter;
  });

  // Sort Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "Price") {
      return parseFloat(a.discountPrice) - parseFloat(b.discountPrice);
    }
    return a.name.localeCompare(b.name);
  });

  // Handle Add to Cart
  const handleAddToCart = async (product) => {
    try {
      const resultAction = await dispatch(
        addToCart({
          productId: product._id,
          name: product.name,
          price: product.price,
          discountPrice: product.discountPrice,
          quantity: 1, // Default quantity is 1
        })
      );
  
      if (addToCart.fulfilled.match(resultAction)) {
        // Show success toast notification
        toast.success(`${product.name} added to cart!`, {
          position: "top-right",
          autoClose: 3000, // Automatically close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (addToCart.rejected.match(resultAction)) {
        // Show error toast notification
        const errorMessage = resultAction.payload?.message || "Failed to add item to cart.";
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      // Catch any unexpected errors and show a generic toast notification
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  

  // Conditional Rendering
  if (status === "loading") {
    return <p>Loading products...</p>;
  }

  if (status === "failed") {
    return <p className="text-danger">Error: {message}</p>;
  }

  if (status === "succeeded" && products.length === 0) {
    return <p className="text-center">No products available.</p>;
  }

  return (
    <div className="container">
      <ToastContainer /> {/* Toast notification container */}
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <Sidebar setFilter={setFilter} />
        </div>

        {/* Products Section */}
        <div className="col-md-9">
          {/* <ul className="my_menu">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Gallery</a></li>
          </ul>
          <a href="" className="primary" >Primary</a>
          <a href="" className="secondary" >Secondary</a> */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Products</h4>
            <select
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="Product Name">Sort by Name</option>
              <option value="Price">Sort by Price</option>
            </select>
          </div>
          <div className="row">
            {sortedProducts.map((product) => (
              <div className="col-md-4 mb-4" key={product._id}>
                <div className="card h-100">
                  <img
                    src={product.image || "https://via.placeholder.com/150"}
                    className="card-img-top w-100" style={{ height: "150px" }}
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      <span className="text-muted text-decoration-line-through">
                        ${Number(product.price).toFixed(2)}
                      </span>{" "}
                      <span className="text-success">
                        ${Number(product.discountPrice).toFixed(2)}
                      </span>
                    </p>
                    <Link
                      to={`/detailsproduct/${product._id}`}
                      className="btn btn-primary btn-sm text-white text-decoration-none"
                    >
                      View Details
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-sm btn-warning ms-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
