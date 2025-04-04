import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AvatharProfile from '../assets/AvatharProfile.jpg'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { color } from "chart.js/helpers";
const Header = ({ insideLogin, Login }) => {
  const userId = sessionStorage.getItem("user");
  const userId1 = JSON.parse(userId)
  console.log(userId1);

  // console.log(insideLogin);

  // State for hover effects
  const [hovered, setHovered] = useState(null);

  // Function to handle hover
  const handleHover = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  return (

    <Navbar expand="lg" className=" text-white p-3" style={{ backgroundColor: '#343a40', color: 'white' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
        <i className="fa-solid fa-truck-fast mr-2" style={{color:'white'}}></i> 
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
            Login === 'login' ? <div></div>
              :
              insideLogin === 'inside' ? <Button variant="outline-success" className="me-3"><Link to='/login' className="text-white text-decoration-none">Login</Link></Button>
                :

                <div className="d-flex align-items-center">
                  <div>
                    
                  </div>
                  <Link to={'/cart'}>
                    <i style={{ color: 'white' }} className="fa-solid fa-cart-plus fa-lg"></i>
                  </Link>
                </div>
          }
          <Profile userId1={userId1} />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;