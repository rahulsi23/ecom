import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, deleteCategory } from "../../../../../redux/slices/categorySlice";
import { Link } from "react-router-dom";
import { admin_routes } from "../../../../../routes/route.jsx";
import { FaEdit, FaTrash } from "react-icons/fa";

const Category = () => {
  const dispatch = useDispatch();

  // Correctly access the state for categories, status, and message
  const { items: categories, status, message } = useSelector((state) => state.categories  );

  useEffect(() => {
    // Always fetch categories on mount
    dispatch(fetchCategories());
  }, [dispatch]);
  

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (!confirmDelete) return;

    try {
      await dispatch(deleteCategory(id)).unwrap();
      alert("Category deleted successfully!");
      dispatch(fetchCategories());
    } catch (error) {
      alert("Failed to delete category: " + error);
    }
  };

  return (
    <div className="p-3">
      <h2 className="mb-3 text-center">Categories</h2>
      <Link to={admin_routes.add_category.path} className="btn btn-success mb-3">
        Add New
      </Link>

      {status === "loading" && <p>Loading categories...</p>}
      {status === "failed" && <p className="text-danger">Error: {message}</p>}

      {status === "succeeded" && categories.length > 0 ? (
        <div className="table-responsive mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={admin_routes.edit_category.path.replace(":id", category._id)}
                        className="btn btn-link p-0 me-2"
                        title="Edit Category"
                      >
                        <FaEdit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(category._id)}
                        className="btn btn-link text-danger p-0"
                        title="Delete Category"
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
        status === "succeeded" && <p className="text-center">No categories found. Add a new category to get started.</p>
      )}
    </div>
  );
};

export default Category;
