import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Virgenlix</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#nuevo">Nuevo</Nav.Link>
                <Nav.Link href="#tendencia">Tendencia</Nav.Link>
                <Nav.Link href="#clasicos">Clasicos</Nav.Link>
                <NavDropdown title="Programas">
                  <NavDropdown.Item href="#series">Series</NavDropdown.Item>
                  <NavDropdown.Item href="#Peliculas">
                    Peliculas
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Form className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="me-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
