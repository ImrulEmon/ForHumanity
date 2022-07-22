import React, { useState } from "react";
import { useTabtitle } from "../../hooks/useTabtitle";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

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
    <div className="container">
      <div>
        <h1 className="text-center my-5">Contact Us</h1>
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
    </div>
  );
};
export default Contact;
