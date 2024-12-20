import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  // Initial state for the cart
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wooden Chess Board Ebony Wood 19\" - 50 mm",
      price: 319.99,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    }
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (index, value) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = value;
    setCartItems(newCartItems);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <Row>
        <Col md={8}>
          <Table responsive bordered>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <Row>
                      <Col xs={4}>
                        <img src={item.image} alt={item.name} className="img-fluid" />
                      </Col>
                      <Col xs={8} className="d-flex align-items-center">
                        <p>{item.name}</p>
                      </Col>
                    </Row>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <Form.Control
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                      style={{ width: '60px' }}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Action Buttons */}
          <div className="d-flex justify-content-between mt-3">
            <Button variant="dark">Continue Shopping</Button>
            <Button variant="dark">Clear Shopping Cart</Button>
            <Button variant="dark">Update Shopping Cart</Button>
          </div>
        </Col>

        <Col md={4}>
          {/* Order Summary */}
          <div className="border p-3">
            <h5 className="mb-3">Summary</h5>

            <InputGroup className="mb-3">
              <Form.Select>
                <option>Estimate Shipping and Tax</option>
              </Form.Select>
            </InputGroup>

            <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
            <p><strong>Shipping (Free Shipping - Free):</strong> $0.00</p>
            <h5><strong>Order Total:</strong> ${subtotal.toFixed(2)}</h5>

            <InputGroup className="mb-3">
              <Form.Control placeholder="Apply Discount Code" />
            </InputGroup>

            <Button variant="danger" className="w-100 mb-2">Proceed to Checkout</Button>
            <Button variant="success" className="w-100">Pay with Link</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
