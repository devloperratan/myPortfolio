import React, { useState } from 'react';
import { Navbar, Nav, Container, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="p-4 shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">Ratan Singh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                <Collapse in={isOpen}>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
