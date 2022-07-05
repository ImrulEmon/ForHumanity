import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <Form>
              <Form.Group id="email" className="my-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>

              <Button className="w-100 my-4" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account ?{" "}
          <Link className="link" to="/register">
            Register
          </Link>
          <Button className="google w-100 my-5 d-flex justify-content-center align-items-center">
            <i className="fab fa-google"></i>
            <span className="mx-5">Google</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
