import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function navBar() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          
          <Nav className="navBar">
            <Nav.Link><NavLink to="/"> Inicio </NavLink></Nav.Link>
            <Nav.Link><NavLink to="/category/pc">PC GAMERs</NavLink>  </Nav.Link>
            <Nav.Link><NavLink to="/category/consolas">Consolas</NavLink>  </Nav.Link>
            <Nav.Link><NavLink to="/category/accesorios">Accesorios</NavLink>  </Nav.Link>
            <Nav.Link><NavLink to="/src/componentes/CartDetalle/CartDetalle.js"> <CartWidget /></NavLink></Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
      
  );
}

export default navBar;