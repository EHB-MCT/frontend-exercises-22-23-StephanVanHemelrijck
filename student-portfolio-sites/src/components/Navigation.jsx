import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ margin: 0 }}>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
