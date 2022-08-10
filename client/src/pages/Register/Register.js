import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";
import { useTabtitle } from "../../hooks/useTabtitle";

const Register = () => {
  // =======event name in form==========
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  //console.log(tasks);
  //===============
  useTabtitle("Volunteer Register");
  const {
    register,
    handleSubmit,
    reset,
    //,formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    fetch("http://localhost:5000/member", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == 200) {
        alert("Added Successfully");
        reset();
      }
    });
  };
  //console.log(errors);

  return (
    <Container style={{ minHeight: "100vh" }}>
      <div className="w-100 mx-auto my-5" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <legend className="text-center py-4">
              Register as a Volunteer
            </legend>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group id="firstName" className="my-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  {...register("FullName", { maxLength: 80 })}
                  required
                />
              </Form.Group>

              <Form.Group id="email" className="my-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  {...register("Email", { pattern: /^\S+@\S+$/i })}
                  required
                />
              </Form.Group>

              <Form.Group id="date" className="my-2">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date"
                  {...register("Date", { maxLength: 100 })}
                  required
                />
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
                  required
                />
              </Form.Group>

              <Form.Group id="event" className="my-2">
              <Form.Label>Select Event</Form.Label>
                <select  className="form-select" {...register("Event", { required: true })}>
                  {tasks.map((task) => (
                    <option key={task._id} value={task.title}>
                      {task.title}
                    </option>
                  ))}
                </select>
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
