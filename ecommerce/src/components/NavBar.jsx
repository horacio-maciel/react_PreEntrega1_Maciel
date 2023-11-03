import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Cartwidget } from "./CartWidget";


export const Navbar = () => {
    return (<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">inicio</Nav.Link>
            <Nav.Link href="#features">contactos</Nav.Link>
            <Nav.Link href="#pricing">nosotros</Nav.Link>
          </Nav>
           <CartWidget />
        </Container>
      </Navbar>
    );
};