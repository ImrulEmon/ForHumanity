import React from "react";
import { Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Container style={{ minHeight: "100vh" }}>
         <div className="w-100 mx-auto my-5" style={{ maxWidth: "400px" }}>
    <Card>
      <Card.Body>
        <legend className="text-center py-4">Register as a Volunteer</legend>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group id="firstName" className="my-2">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              {...register("FullName", {maxLength: 80 })}
            required/>
          </Form.Group>

          <Form.Group id="email" className="my-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("Email", {pattern: /^\S+@\S+$/i })}
              required/>
          </Form.Group>

          <Form.Group id="date" className="my-2">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="datetime"
              placeholder="Date"
              {...register("Date", {maxLength: 100 })}
              required/>
          </Form.Group>

          <Form.Group id="mobile" className="my-2">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Mobile number"
              {...register("MobileNumber", {
                
                minLength: 6,
                maxLength: 12,
              })}
              required/>
          </Form.Group>

          <Form.Group id="event" className="my-2">
            <Form.Label>Event</Form.Label>
            <Form.Control
              type="text"
              placeholder="Event"
              {...register("Event", {maxLength: 80 })}
            required/>
          </Form.Group>
          <input className="btn btn-dark my-3" type="submit" />
        </form>
      </Card.Body>
    </Card>
    </div>
    </Container>
  );
};

export default Register;
