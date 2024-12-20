import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Image, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Wishlist = () => {
  // Initial wishlist items
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Wooden Chess Board Ebony Wood 19\" - 50 mm",
      price: 319.99,
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Prestige Staunton Series Chess Pieces - 4.0\" King",
      price: 299.99,
      image: "https://via.placeholder.com/100"
    }
  ]);

  // Function to remove an item from the wishlist
  const removeItem = (itemId) => {
    const updatedItems = wishlistItems.filter(item => item.id !== itemId);
    setWishlistItems(updatedItems);
  };

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    // This is a placeholder function, add your cart logic here
    alert(`Item ${itemId} added to cart!`);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <Alert variant="info">Your wishlist is empty!</Alert>
      ) : (
        <Table bordered responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map(item => (
              <tr key={item.id}>
                <td>
                  <Row>
                    <Col xs={4}>
                      <Image src={item.image} alt={item.name} fluid />
                    </Col>
                    <Col xs={8} className="d-flex align-items-center">
                      {item.name}
                    </Col>
                  </Row>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <Button 
                    variant="success" 
                    className="me-2"
                    onClick={() => addToCart(item.id)}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Wishlist;
