import "../styles/LogIn.css";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export function LogIn() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "0" && e.target[1].value !== "") {
      setUser({
        username: e.target[0].value,
        password: e.target[1].value,
      });
      alert(
        "usuario: " + e.target[0].value + "\ncontrasenia: " + e.target[1].value
      );
    } else if (e.target[0].value === "" && e.target[1].value === "") {
      alert("llena las dos cosas gordo puto");
    } else if (e.target[0].value === "") {
      alert("pone usuario papi");
    } else if (e.target[1].value === "") {
      alert("pone contrasenia papi");
    }
  };

  // useEffect(() => console.log("first"), [user]);

    const postData = () => {
    if (user.username === "") {
      return;
    }

    console.log("posting data, user: ", user.username);
    fetch(`http://localhost:5000/login?username=${user.username}&password=${user.password}`)
      .then(resp => {
        if(resp.ok){
          window.location.href="/"
        };});
  };

  useEffect(postData, [user]);

  return (
    <div className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Username">
          <Form.Label>Log in to an existing account</Form.Label>
          <Form.Control placeholder="Enter Username" />
          <Form.Text className="text-muted">
            If you forgot your username go fuck yourself
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{ justifySelf: "center" }} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
