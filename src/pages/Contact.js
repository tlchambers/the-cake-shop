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
          <div className="row g-3">
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                aria-label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                aria-label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label for="exampleFormControlInput1" className="form-label">
            Subject
          </label>
          <input
            type="subject"
            className="form-control"
            id="exampleFormControlInput1"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              {/* <button type="submit" className="btn btn-primary" value={submit}
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
