import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";
import { useTabtitle } from "../../hooks/useTabtitle";
import useAuth from "../../hooks/useAuth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../components/Firebase/firebase.init";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const Login = () => {
  useTabtitle("Log In");
  const { user, setUser, signInUsingGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const redirect_uri = location.state?.from || "/register";
  // console.log(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, eUser, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (eUser) {
      // console.log(gUser || user);
      navigate(from, { replace: true });
    }
  }, [eUser, from, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group id="email" className="my-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required {...register("email")} />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  {...register("password")}
                />
              </Form.Group>

              <Form.Control
                value="Log In"
                className="w-100 my-4"
                type="submit"
              />
            </Form>
            <span>Forgot password? <Link className="link" to='/resetPassword'>Reset</Link></span>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          New here ?{" "}
          <Link className="link" to="/signup">
            Sign Up
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
