import React from "react";
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

export default function NavbarComp({
  nombre,
  boton1,
  boton2,
  boton3,
  boton4,
  boton5,
  boton6,
  boton7,
  boton8,
}) {
  return (
    <div className="NavbarComp">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={nombre}>{nombre}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={boton1}>{boton1}</Nav.Link>
              <Nav.Link href={boton2}>{boton2}</Nav.Link>
              <Nav.Link href={boton3}>{boton3}</Nav.Link>
              <NavDropdown title={boton4}>
                <NavDropdown.Item href={boton5}>{boton5}</NavDropdown.Item>
                <NavDropdown.Item href={boton6}>{boton6}</NavDropdown.Item>
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
              <Nav.Link href={boton7}>{boton7}</Nav.Link>
              <Nav.Link href={boton8}>{boton8}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
