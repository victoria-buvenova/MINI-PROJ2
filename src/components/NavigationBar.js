import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../context/AuthProvider';
import {MDBBtn, MDBIcon} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function NavigationBar() {
  const {user, logout, cart} = useAuth()
  
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Make up Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/products">Products</Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
{user && 
<>
        <div>{user.email}</div>
        <MDBBtn color='link' rippleColor='dark' onClick={logout}>
      Logout
    </MDBBtn>
   <Link to="/cart"> <MDBIcon fas icon="shopping-cart" /></Link><span>({cart.length})</span>
</>
}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;