import "../styles/LogIn.css";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target[0].value === "") {
      alert("Insert a username you dumb fuck");
      return;
    }

    if (e.target[1].value) {
      alert("Insert a email you dumb fuck");
      return;
    }

    if (e.target[2].value) {
      alert("Insert a password you dumb fuck");
      return;
    }

    if (e.target[2].value !== e.target[3].value) {
      alert("las contrasenias no son iguales gordito");
      return;
    }

    setUser({
      username: e.target[0].value,
      email: e.target[1].value,
      passsword: e.target[2].value,
    });
    alert(
      "usuario: " + e.target[0].value + "\ncontrasenia: " + e.target[1].value
    );
  };

  const postData = () => {
    if (user.username === "") {
      return;
    }

    console.log("posting data, user: ", user.username);
    fetch("http://localhost:5000", {
      method: "POST",
      headers: { type: "application/json" },
      body: user,
    });
  };

  useEffect(postData, [user]);

  return (
    <div className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Username">
          <Form.Label>Enter a username</Form.Label>
          <Form.Control placeholder="Enter Username" />
          <Form.Label>Enter your Email</Form.Label>
          <Form.Control type="mail" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repeat your password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{ justifySelf: "center" }} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
