import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="name_web" href="/">
        Code-Code2an
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="link1" to="/">
          Home
        </Link>

        <Link className="link1" to="/profile">
          Profile
        </Link>

        <Link className="link1" to="/about">
          About
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
