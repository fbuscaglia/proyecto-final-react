import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'

function BasicExample() {
  return (
    <Navbar bg="gray" expand="lg" className="fondo sticky-top">
      <Container>
        <Nav.Link as={NavLink} to='/marietas-shop' className="navlink">Marieta's Clothes</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fondo">
            <Nav.Link as={NavLink} to='/marietas-shop' className="navlink">Home</Nav.Link>
            <Nav.Link as={NavLink} to='/marietas-shop' className="navlink">Catalogo</Nav.Link>
            <NavDropdown title="Ropa" id="basic-nav-dropdown" className="navlink">
              <NavDropdown.Item as={NavLink} to='/category/ropa-interior' className="navlink1">Ropa interior</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/pijamas' className="navlink1">Pijamas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/accesorios' className="navlink1">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;