import React, { useContext } from "react";
import { context } from "../context/context";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../styles/NavbarComp.css";

export function NavbarComp() {
  const { setRoute } = useContext(context);
  return (
    <div className="NavbarComp">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" onClick={() => setRoute("/")}>
                Home
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  setRoute("/movies");
                }}
              >
                Movies
              </Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  setRoute("/series");
                }}
              >
                Series
              </Nav.Link>

              <NavDropdown title="Categories">
                <NavDropdown.Item onClick={() => setRoute("/action")}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setRoute("/drama")}>
                  Drama
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setRoute("/drama")}>
                  Comedy
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Brand style={{ margin: "auto" }} href="/">
              PelisPlu?
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="/signup">Sign in</Nav.Link>
              <Nav.Link href="/login">Log in</Nav.Link>
              <Nav.Link href="#tendencia">Perfil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
