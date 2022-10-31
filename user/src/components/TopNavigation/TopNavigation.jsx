import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

class TopNavigation extends Component {
  render() {
    return (
      <>
        <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Recoo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">HOME</Nav.Link>
                    <Nav.Link href="#deets">SERVICES</Nav.Link>
                    <Nav.Link href="#deets">COURSES</Nav.Link>
                    <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                    <Nav.Link href="#deets">CONTACT</Nav.Link>
                    <Nav.Link href="#deets">ABOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default TopNavigation;