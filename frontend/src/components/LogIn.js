import '../styles/LogIn.css';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

export function LogIn() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.target[0].value != '' && e.target[1].value != '') {
      setUser({ username: e.target[0].value, password: e.target[1].value });
      alert('usuario: ' + e.target[0].value + '\ncontrasenia: ' + e.target[1].value);
    } else if (e.target[0].value == '' && e.target[1].value == '') {
      alert('llena las dos cosas gordo puto');
    } else if (e.target[0].value == '') {
      alert('pone usuario papi');
    } else if (e.target[1].value == '') {
      alert('pone contrasenia papi');
    }
  };

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
        <Button style={{ justifySelf: 'center' }} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}