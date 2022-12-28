import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
function navBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='contenedorNav'>
        <Navbar.Brand href="#home">Inicio </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#nosotros">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PC Gamers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Consolas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Arma tu PC
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            
            
            
            
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;