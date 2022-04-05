import React from 'react';
import { Navbar, Container,Nav, NavbarBrand} from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MOOV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Productos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
            <CartWidget></CartWidget>
        </Container>
      </Navbar>
    );
}

export default NavBar;