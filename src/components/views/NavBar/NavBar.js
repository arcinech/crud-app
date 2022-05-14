import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
import {NavLink, Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 px-4 rounded">
        <Navbar.Brand as={Link} to="/">Blog.app</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;