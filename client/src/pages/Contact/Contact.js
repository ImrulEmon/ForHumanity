import React, { useState } from "react";
import { useTabtitle } from "../../hooks/useTabtitle";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Accordion from "../../components/Accordion/Accordion";
import "./Contact.css";

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
    <section id="contactPage">
       <h1 className="text-center py-3">Contact</h1>
      <Container
        className="d--block d-lg-flex align-items-center justify-content-center gap-4"
        style={{ minHeight: "75vh" }}
      >
        <div className="w-100" style={{ maxWidth: "600px" }}>
         

          <div>
            <Form className="" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  {...register("Email", { required: true })}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Please Give Your Feedback"
                  rows={3}
                  {...register("Feedback", { required: true })}
                  style={{minHeight:"250px"}}
                />
              </Form.Group>
              <input className="btn btn-dark w-25 d-block mx-auto" type="submit"/>
            </Form>
           
          </div>
        </div>

        <Accordion></Accordion>
      </Container>
    </section>
  );
};
export default Contact;
