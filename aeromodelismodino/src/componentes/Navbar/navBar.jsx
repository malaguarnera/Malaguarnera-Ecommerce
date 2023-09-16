import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from '../cartwidget/cartwidget';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <>

      <Navbar bg="primary" data-bs-theme="dark" className=' w-100' >
        <Container>
          <Navbar.Brand href="#home">AeromodelismoDino</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
          </Nav>
        </Container>
        <nav>

          <CartWidget />
          
        </nav>
      </Navbar>

    </>
  
  );
}

export default NavBar