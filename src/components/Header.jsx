import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AvatharProfile from '../assets/AvatharProfile.jpg'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { color } from "chart.js/helpers";


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const Header = ({ insideLogin, Login }) => {
  const userId = sessionStorage.getItem("user");
  const userId1 = JSON.parse(userId);

  const [hovered, setHovered] = useState(null);
  const handleHover = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  const isMobile = useMediaQuery('(max-width: 549px)');
  const [menuOpen, setMenuOpen] = useState(false)
  const [showLinks, setShowLinks] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(prev => !prev);
  };

  return (


    <div className="text-white p-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#343a40' }}>
      <style>
        {`@media(min-width:600px){
        .menu-toggle{
        display:none;
        }
        @media(max-width:600px){
        
        }
          
        }
        `}
      </style>
      <div>
        <i className="fa-solid fa-truck-fast mr-2" style={{ color: 'white' }}></i>
      </div>
      {
        insideLogin ? <div></div>
          :
          <div className="d-none d-md-block">
            <ul className="list-unstyled d-flex gap-3 mb-0">
              <li><Link to="/men" className="text-white">Men</Link></li>
              <li><Link to="/women" className="text-white">Women</Link></li>
              <li><Link to="/kids" className="text-white">Kids</Link></li>
            </ul>
          </div>



      }
      {/* Mobile links (shown when menu-toggle is clicked) */}
      {
        showMobileMenu && (
          <div className="d-md-none mt-2">
            <div className="d-flex justify-content-start align-items-center gap-3">
              <Link to="/men" className="text-white">Men</Link>
              <Link to="/women" className="text-white">Women</Link>
              <Link to="/kids" className="text-white">Kids</Link>
              <Link to="/cart">
                <i style={{ color: 'white' }} className="fa-solid fa-cart-plus fa-lg"></i>
              </Link>
            </div>
          </div>
        )
      }


      <div className="d-flex align-items-center">
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
                <div className="d-none d-md-block">
                  <Link to={'/cart'}>
                    <i style={{ color: 'white' }} className="fa-solid fa-cart-plus fa-lg"></i>
                  </Link>


                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                  <i className="fa-solid fa-bars" style={{ fontSize: '20px' }}></i>
                </div>

              </div>
        }
        <Profile userId1={userId1} />

      </div>
    </div>


  );
};


export default Header;