import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const resultAction = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate('/Home'); // Redirect after successful login
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Customer Login</h2>
      <Row>
        <Col md={6} className="border-end">
          <h4>Registered Customers</h4>
          <p>If you have an account, sign in with your email address.</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="danger" type="submit" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
            <div>
              <Link to="#forgot-password" className="text-decoration-none">
                Forgot Your Password?
              </Link>
            </div>
          </Form>
          <p className="text-danger mt-2">* Required Fields</p>
        </Col>
        <Col md={6} className="ps-4">
          <h4>New Customers</h4>
          <p>
            Creating an account has many benefits: check out faster, keep more than one address,
            track orders and more.
          </p>
          <Link to="/signup">
            <Button variant="danger">Create an Account</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
