import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Product_details = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          {/* Image Carousel */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://plus.unsplash.com/premium_photo-1675896296481-7b39aa0e7ca2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZXNzfGVufDB8fDB8fHww"
                alt="First slide"
                style={{ minHeight: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://plus.unsplash.com/premium_photo-1672855928381-c237c6d74760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlc3MlMjBib2FyZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Second slide"
                style={{ minHeight: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZXNzfGVufDB8fDB8fHww"
                alt="Third slide"
                style={{ minHeight: "100vh" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col md={6}>
          {/* Product Details */}
          <h3 className="mb-3">
            Prestige Staunton Series Weighted Chess Pieces in Anjan Wood & Box
            Wood - 4.0" King
          </h3>
          <p>
            <Badge bg="success">In Stock</Badge>{" "}
            <span className="ms-2">SKU: AS269</span>
          </p>
          <h4 className="text-success mb-4">$319.99</h4>

          {/* Quantity Selector */}
          <Form className="d-flex align-items-center mb-3">
            <Form.Control
              type="number"
              min="1"
              defaultValue="5"
              className="me-3"
              style={{ width: "80px" }}
            />
            <Button variant="success">Add to Cart</Button>
            <Button variant="outline-danger" className="ms-3">
              ♥
            </Button>
          </Form>

          {/* Material and Dimensions */}
          <p>
            <strong>Material:</strong> Anjan Wood and Boxwood
          </p>
          <p>
            <strong>Dimensions:</strong>
          </p>
          <ul>
            <li>King Height - 4.0" (101 mm)</li>
            <li>King Base - 1.7" (43 mm)</li>
            <li>Pawn Height - 2.2" (55 mm)</li>
            <li>Pawn Base - 1.2" (30 mm)</li>
          </ul>

          {/* Additional Information */}
          <p>
            <strong>You're getting:</strong> 34 pieces (2 extra Queens
            included); Board and Storage Box is not included.
          </p>

          {/* Read More Button */}
          <Button variant="danger" className="mt-3">
            Read More...
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Product_details;
