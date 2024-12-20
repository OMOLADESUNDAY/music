import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpeg'

const Navbarr = () => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);
  return (
    <Navbar expand="lg" className="bg-body-tertiary jjjk">
      <Container >
          <Navbar.Brand href="#home" className='logoContainer'><img src={Logo} alt="kahlido" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-between">
        <Nav className="mx-auto me-5" activeKey="/home">
        <Nav.Item>
          <Nav.Link className='navv-link' as={Link} to="/home" >HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='navv-link'>ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='navv-link'>ALBUMS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-2" className='navv-link'>TOURS</Nav.Link>
        </Nav.Item>
         <NavDropdown   
            id="basic-nav-dropdown"
            show={show} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            title={<span className='navv-link'>PAGES</span>}
            className='dropdown-toggle'>
              <NavDropdown.Item href="#action/3.1" ><Nav.Link as={Link} to="/home" >Gallery</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Nav.Link as={Link} to="/home" >Ticket</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Nav.Link as={Link} to="/home" >Album details</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Nav.Link as={Link} to="/home" >Blog single</Nav.Link></NavDropdown.Item>
            </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='navv-link'>BLOG</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='navv-link'>CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="d-flex align-items-center">
        <button className="btn send-btn buuy" >BUY TICKET</button>
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr