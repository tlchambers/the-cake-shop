import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Styling/Form.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <div class="row g-3">
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                aria-label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                aria-label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label for="exampleFormControlInput1" class="form-label">
              Subject
            </label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Cakes"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Cupcakes"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Treats"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              {/* <button type="submit" class="btn btn-primary" value={submit}
            onChange={(e) => setSubmit(e.target.value)}> */}
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Contact;
