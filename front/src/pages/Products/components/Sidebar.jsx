import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../../redux/slices/categorySlice";

const Sidebar = ({ setFilter }) => {
  const dispatch = useDispatch();

  // Fetch categories from Redux store
  const { items: categories, status } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Shop by Category</h3>
      <ul className="list-group">
        <li
          key="all"
          className="list-group-item"
          onClick={() => setFilter("All")}
        >
          Show All
        </li>
        {status === "loading" && <li>Loading...</li>}
        {status === "failed" && <li>Error loading categories</li>}
        {status === "succeeded" &&
          categories.map((category) => (
            <li
              key={category._id}
              className="list-group-item"
              onClick={() => setFilter(category.name)}
            >
              {category.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
