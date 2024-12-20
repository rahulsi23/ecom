import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details_Product = () => {
  const { productId } = useParams();
  const { items: products = [] } = useSelector((state) => state.products || {});
  const product = products.find((item) => item._id === productId);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6">
          <img
            src={product.image || "https://via.placeholder.com/500"}
            alt={product.name}
            className="img-fluid"
          />
          <div className="mt-3 d-flex flex-column">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image || "https://via.placeholder.com/100"}
                alt={`Product Thumbnail ${index + 1}`}
                className="img-thumbnail mb-2"
                style={{ width: "80px", height: "80px", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <h1 className="product-title">{product.name}</h1>
          <p className="text-muted">SKU: {product.sku || "N/A"}</p>
          <h4 className="text-success">${Number(product.discountPrice).toFixed(2)}</h4>
          <p>
            <span className="text-muted text-decoration-line-through">
              ${Number(product.price).toFixed(2)}
            </span>
          </p>
          <p>
            <strong>Availability:</strong> {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p>
            <strong>Material:</strong> {product.material || "N/A"}
          </p>
          <p>
            <strong>Dimensions:</strong>
          </p>
          <ul>
            <li>King Height: {product.dimensions?.kingHeight || "N/A"}</li>
            <li>King Base: {product.dimensions?.kingBase || "N/A"}</li>
            <li>Pawn Height: {product.dimensions?.pawnHeight || "N/A"}</li>
            <li>Pawn Base: {product.dimensions?.pawnBase || "N/A"}</li>
          </ul>

          {/* Add to Cart Section */}
          <div className="d-flex align-items-center">
            <input
              type="number"
              className="form-control me-3"
              style={{ width: "80px" }}
              defaultValue={1}
              min={1}
            />
            <button className="btn btn-success me-2">Add to Cart</button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-heart"></i> Add to Wishlist
            </button>
          </div>

          <p className="mt-4">
            <strong>You're getting:</strong> {product.description || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details_Product;
