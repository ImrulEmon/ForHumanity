import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";
import { useTabtitle } from "../../hooks/useTabtitle";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  useTabtitle("Log In");
  const { user, setUser, signInUsingGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/register";
  // console.log(user);

  const handleGoogleLogIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(redirect_uri);
      })
      .catch((error) => {
        console.log(`${error.code} : ${error.messages}`);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <p className="text-center text-muted fw-light ">
              Under construction
            </p>
            <Form>
              <Form.Group id="email" className="my-2">
                <Form.Label>Email</Form.Label>
                <Form.Control disabled type="email" required />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control disabled type="password" required />
              </Form.Group>

              <Button className="w-100 my-4" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account ?{" "}
          <Link className="link" to="/register">
            Register
          </Link>
          <button
            style={{ height: "50px" }}
            onClick={handleGoogleLogIn}
            className="btn google fw-bold w-100 my-5 d-flex justify-content-center align-items-center"
          >
            <i className="fab fa-google"></i>
            <span className="mx-5">Continue with Google</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
