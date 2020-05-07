import React from 'react';
import {Navbar, Nav, NavDropdown, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function navbar() {
  return (
    <div className="navbar">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">HomePage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">2</Nav.Link>
            <Nav.Link href="#link">3</Nav.Link>
            <Nav.Link href="#link">4</Nav.Link>
            <Nav.Link href="#link">5</Nav.Link>
            <Nav.Link href="#link">6</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="http://google.com" target = "_blank">Go to Google</NavDropdown.Item>
              <NavDropdown.Item href="http://youtube.com" target = "_blank">Go to YouTube</NavDropdown.Item>
              <NavDropdown.Item href="http://google.co.th">Go to Google but in Thai</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="http://panggundam00.github.io/">Back to group main page</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navbar;
