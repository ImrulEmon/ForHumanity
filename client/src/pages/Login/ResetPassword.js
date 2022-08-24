import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTabtitle } from "../../hooks/useTabtitle";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from "../../components/Firebase/firebase.init";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  useTabtitle("Reset Password");
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );

  if (sending) {
    <div style={{minHeight:"100vh"}}>
        <LoadingSpinner />
    </div>
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async(data) => {
    await sendPasswordResetEmail(data.email);
    alert(`Email sent.Check Inbox of ${data.email}`);
    navigate('/login')
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Reset Password</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group id="email" className="my-2">
                <Form.Label>Email</Form.Label>
                <Form.Control className="text-center" placeholder="your email" type="email" required {...register("email")} />
              </Form.Group>

              <Form.Control
                value="Reset"
                className="w-100 my-4 btn btn-dark"
                type="submit"
              />
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ResetPassword;
