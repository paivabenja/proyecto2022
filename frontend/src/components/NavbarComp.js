import React from "react";
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../styles/NavbarComp.css";

export function NavbarComp() {
  return (
    <div className="NavbarComp">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>Mapet</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/movies'>Movies</Nav.Link>
              <Nav.Link href='/series'>Series</Nav.Link>
              <NavDropdown title='Categories'>
                <NavDropdown.Item href='/categories/action'>Action</NavDropdown.Item>
                <NavDropdown.Item href='/categories/drama'>Drama</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="alla la buscan"
                  className="me-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
<<<<<<< HEAD:frontend/src/components/NavbarComp.js
              <Nav.Link href='/signup'>Sign in</Nav.Link>
              <Nav.Link href='/login'>Log in</Nav.Link>
=======
              <Nav.Link href="#tendencia">Perfil</Nav.Link>
>>>>>>> 46e42e0061b06281679d2bb0a3a13a3f7a2b9c28:app-peliculas/src/components/NavbarComp.js
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
