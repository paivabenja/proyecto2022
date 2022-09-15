import React from 'react';
import { Button } from 'react-bootstrap';

export function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('que pasa chavales');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <input type="submit" placeholder="hola" />
      </form>
    </div>
  );
}
