import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function navBar() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/"> Inicio </NavLink></Nav.Link>
            <Nav.Link><NavLink to="/category/pc">PC GAMERs</NavLink>  </Nav.Link>
            <Nav.Link><NavLink to="/category/consolas">Consolas</NavLink>  </Nav.Link>
            <Nav.Link><NavLink to="/category/accesorios">Accesorios</NavLink>  </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
  );
}

export default navBar;