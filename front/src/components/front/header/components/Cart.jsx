import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { NavLink } from "react-router-dom"; // Importing NavLink from react-router-dom
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../../redux/slices/cartSlice"; // Import the fetchCart thunk
import { getUserProfile } from "../../../../redux/slices/userSlice"; // Import the fetchCart thunk
import { routes } from "../../../../routes/route.jsx";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalItems, status } = useSelector((state) => state.cart); // Access cart items from Redux store
  const { user, token, loading: userLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user && token) {
      // Fetch user profile only if user is not loaded but token exists
      dispatch(getUserProfile());
      console.log(token);
    }
  }, [dispatch, user, token]);

  useEffect(() => {
    if (user?.id) {
      // Fetch cart data when user ID is available
      dispatch(fetchCart(user.id));
    }
  }, [dispatch, user]);

  if (userLoading) {
    return <p>Loading...</p>; // Show a loading indicator while fetching user data
  }
  return (
    <Nav>
      <Nav.Link as={NavLink} to={routes.Cart.path}>
        <span
          className="label label-primary"
          style={{
            position: "relative",
            top: "-10px",
            right: "-10px",
          }}
        >
          {totalItems || 0} {/* Show 0 if totalItems is undefined */}
        </span>{" "}
        <FaCartPlus />
      </Nav.Link>
      <Nav.Link as={NavLink} to={routes.Wishlist.path}>
        <FaHeart />
      </Nav.Link>
      <Nav.Link as={NavLink} to={routes.Login.path}>
        <IoMdLogIn />
      </Nav.Link>
    </Nav>
  );
};

export default Cart;
