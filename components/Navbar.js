import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="md">
      <Link href="/" passHref>
        <Navbar.Brand>KL-S</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse
        className="justify-content-start"
        id="responsive-navbar-nav"
      >
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
          <Link href="/projects" passHref>
            <Nav.Link>Projects</Nav.Link>
          </Link>
          <Link href="/contact" passHref>
            <Nav.Link>Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
