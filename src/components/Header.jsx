import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AvatharProfile from '../assets/AvatharProfile.jpg'
import { Link } from "react-router-dom";
const Header = ({ insideLogin, Login }) => {
  // State for hover effects
  const [hovered, setHovered] = useState(null);

  // Function to handle hover
  const handleHover = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  return (
    <Navbar expand="lg" className=" text-white p-3"  style={{backgroundColor:'#343a40', color:'white'}}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img src="logo.png" alt="Logo" width="100" height="auto"/>
        </Navbar.Brand>

        {/* Navigation Links */}
        <Navbar.Toggle aria-controls="navbarNav" />
        {
          insideLogin ? <div></div>
            :
            <Navbar.Collapse id="navbarNav">
              <Nav className="mx-auto">
              {["Men", "Women", "Kids"].map((item, index) => (
                <Link key={index} to={`/${item.toLowerCase()}`} // Dynamic routing without page reload
                className="fw-bold position-relative"
                style={{
                        color: "white",
                        textDecoration: "none",
                        paddingBottom: "5px",
                        marginRight: "15px", // Add spacing
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
        >
        {item}
        <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: "0",
                width: hovered === index ? "100%" : "0",
                height: "2px",
                backgroundColor: "black",
                transition: "all 0.3s ease-in-out",
                transform: "translateX(-50%)",
              }}
              ></span>
            </Link>
                ))}
              </Nav>
            </Navbar.Collapse>
        }

        {/* Search Box and Profile */}
        <Form className="d-flex align-items-center">
          {
            insideLogin && <div></div> 
              
          }
          {
            Login==='login' ? <div></div>
            :
            insideLogin==='inside' ? <Button variant="outline-success" className="me-3"><Link to='/login' className="text-white text-decoration-none">Login</Link></Button>
            :
              
              <div className="d-flex align-items-center">
              <input className="w-full rounded me-2 p-2" type="text" placeholder="search"/>
              <Button variant="outline-light" className="me-3">Search</Button>
              <Link to={'/cart'}>
                <i style={{ color: 'white' }} className="fa-solid fa-cart-plus fa-lg"></i>
              </Link>
            </div>
          }
          <img src={AvatharProfile} alt="Profile" width="30" height="30" className="rounded-circle ms-3" style={{ cursor: "pointer" }}/></Form>
      </Container>
    </Navbar>
  );
};

export default Header;