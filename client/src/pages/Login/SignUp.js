import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../components/Firebase/firebase.init";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useTabtitle } from "../../hooks/useTabtitle";

const SignUp = () => {
  useTabtitle("Sign Up");
  const [displayName, setDisplayName] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (loading || updating) {
    return <LoadingSpinner />;
  }
  if (user) {
    console.log(user);
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log(data);
    navigate("/login");
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 shadow-lg" style={{ maxWidth: "400px" }}>
        <Card >
          <Card.Body >
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form className="form-control shadow-lg" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group id="name" className="my-2">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Full Name" type="text" required {...register("name")} />
              </Form.Group>

              <Form.Group id="email" className="my-2">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Go temp-mail.org" type="email" required {...register("email")} />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                placeholder="password"
                  type="password"
                  required
                  {...register("password")}
                />
              </Form.Group>

              <Form.Control
                className="btn btn-dark w-100 my-4"
                type="submit"
                value="Sign Up"
              />
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SignUp;
