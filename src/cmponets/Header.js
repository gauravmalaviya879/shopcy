import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark text-white">
        <Container>
          <Navbar.Brand href="#home" className="text-white">Shopcy-dev</Navbar.Brand>
          <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="text-white nav-link" href="#home">Home</Link>
              <Link to="/cart" className="text-white nav-link" accordionhref="#link">Cart</Link>
      
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
