import React, { useState } from "react";
import { useTabtitle } from "../../hooks/useTabtitle";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

const Contact = () => {
  useTabtitle("Contact");

  // const [feedback,setFeedback]=useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "75vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
  <input
    type="email"
    placeholder="Email"
    {...register("Email", { required: true })}
  />
  <textarea {...register("Feedback", { required: true })} />

  <input type="submit" />
</form> */}

        <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("Email", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Please Give Your Feedback"
              rows={3}
              {...register("Feedback", { required: true })}
            />
          </Form.Group>
          <input className="btn btn-dark" type="submit" />
        </Form>
      </div>
    </Container>
  );
};
export default Contact;
