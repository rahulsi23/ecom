import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/slices/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      dispatch(signupUser(formData));
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Create New Customer Account</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="border-end">
            <h4>Personal Information</h4>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>
                First Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>
                Last Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formNewsletter" className="mb-3">
              <Form.Check
                type="checkbox"
                label="Sign Up for Newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <h4>Sign-in Information</h4>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>
                Confirm Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Button
              variant="danger"
              type="submit"
              className="w-100"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </Col>
          <Col md={6}>
            <Link to="/login">
              <Button variant="danger" className="w-100">
                Go to Login Page
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Signup;
