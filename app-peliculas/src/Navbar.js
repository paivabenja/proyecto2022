import React from "react";

export default function Navbar() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand></Navbar.Brand>
        <Nav>
          <Nav.Link>
            <a className="item">Github</a>
          </Nav.Link>
          <Nav.Link>
            <a className="item">Twqitter</a>
          </Nav.Link>
          <Nav.Link>
            <a className="item">Instagram</a>
          </Nav.Link>
          <Nav.Link>
            <a className="item">Contact Me</a>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
