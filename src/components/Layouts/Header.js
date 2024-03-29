import React, { useState } from 'react'
import "../../styles/HeaderStyle.css"
import {Container, Nav, Navbar, Form,  Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../assests/logo/logo.png";



const Header = () => {
  const [nav, setNav] = useState(false);
   
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);
  return (
    <header>
      
      <Navbar collapseOnSelect expand='lg' className={`${nav === true ? "sticky" : ""}`}>
      <Container>
        
        <Navbar.Brand href="#home">
        <Link to="/" className='logo'>
        <img src={Logo} alt='Logo' className='img-fluid' />
        </Link>
        </Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
            <Nav.Link as={Link} to="/menu" >Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop" >Shop</Nav.Link>
            <Nav.Link as={Link} to="/blog" >Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
            <Button>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
            </Button>
            <Nav.Link as={Link} to="/" >
              <div className='cart'>
              <i class="bi bi-bag-check-fill"></i>
              <em className='roundpoint'>2</em>
              </div>
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </header>
  );
};

export default Header;
