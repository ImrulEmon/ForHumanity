import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";
import { useTabtitle } from '../../hooks/useTabtitle';

const Login = () => {
  useTabtitle("Log In")
  const {user,setUser,signInUsingGoogle,setIsLoading}=useFirebase({});
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri= location.state?.from || '/admin';
  // console.log(user);

  const handleGoogleLogIn =()=>{
    signInUsingGoogle()
    .then((result) => {
      setUser(result.user);
      navigate(redirect_uri);
    })
    .catch((error) => {
      console.log(`${error.code} : ${error.messages}`);
    }).finally(()=>setIsLoading(false));
  }
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
          <Button onClick={handleGoogleLogIn} className="google w-100 my-5 d-flex justify-content-center align-items-center">
            <i className="fab fa-google"></i>
            <span className="mx-5">Google</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
