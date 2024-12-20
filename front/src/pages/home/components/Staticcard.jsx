import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Cardslider.css";

const Staticcard = () => {
  const navigate = useNavigate();

  
  const products = [
    {
      id: 1,
      title: "wooden chess ",
      image: "https://plus.unsplash.com/premium_photo-1672855928381-c237c6d74760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlc3MlMjBib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
      description: "this is wooden chess.",
      price: "$50",
      available: "Yes",
    },
    {
      id: 2,
      title: "magnetic chess",
      image: "https://images.unsplash.com/photo-1663411605361-b8cc7294c222?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNoZXNzfGVufDB8fDB8fHww",
      description: "this is magnetic chess.",
      price: "$100",
      available: "No",
    },
    {
      id: 3,
      title: "Glass chess",
      image: "https://images.unsplash.com/photo-1708627535997-a6e7fae7b43b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNoZXNzfGVufDB8fDB8fHww",
      description: "this is Glass chess.",
      price: "$500",
      available: "Yes",
    },
    {
      id: 4,
      title: "plastic chess",
      image: "https://plus.unsplash.com/premium_photo-1675762226695-bec5748d4d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlc3N8ZW58MHx8MHx8fDA%3D",
      description: "this is plastic chess.",
      price: "$200",
      available: "No",
    },
  ];

  const handleCardClick = (product) => {
    navigate("/productdetails", { state: product });
  };

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col sm={3} key={product.id}>
            <Card style={{ width: "18rem" }} onClick={() => handleCardClick(product)}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Staticcard;