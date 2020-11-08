import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Routes from "./Routes";

function NavigationBar() {
  return (
    <div>
      <Navbar fluid collapseOnSelect bg="dark" variant="dark" >
        <Navbar.Brand href="/">
            <img
              src="/logo.svg"
              width="50"
              height="50"
              className="d-inline-block mr-2"
              alt="React Bootstrap logo"
            />
            Curly Wurly Blog
            </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default NavigationBar;