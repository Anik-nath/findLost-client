import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Firebase/Hooks/useAuth";

const Navigation = () => {
  const [shownavbar,setNavbar] = useState(false);
  const {user} = useAuth();

    const changeBackground = () =>{
        if(window.scrollY >= 40){
            setNavbar(true)
        }
        else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
    <div>
      <Navbar
        className={shownavbar ? 'NavbarActive' : ''}
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container className="py-2">
          <Navbar.Brand className="d-flex flex-column align-items-center" as={HashLink} to="/home">
            {/* <img
              alt=""
              src={brand}
              width="100%"
              height="50px"
              className="d-inline-block align-top"
            />{" "} */}
            <strong className="text-light h3 mb-0"><i className="fas fa-search"></i> Khujakhuji.com</strong>
            {/* <small className="text-white-50 fs-6 mt-0">-Find Your Property fast-</small> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center text-dark">
              <Nav.Link className="entryButton px-3 mt-3 mt-lg-0 mt-md-0" as={HashLink} to="/">
              <i className="fas fa-plus"></i> Lost Entry
              </Nav.Link>
              <Nav.Link
                className="entryButton px-3 ms-lg-3 ms-md-3 mt-3 mt-lg-0 mt-md-0"
                as={HashLink}
                to="/"
              >
                <i className="fas fa-plus"></i> Found Entry
              </Nav.Link>
            </Nav>
            <Nav  className="ms-auto text-center">
              {
                !user.email ? 
                <Nav.Link
                className="text-light px-3 entryButton mt-3 mt-lg-0 mt-md-0"
                as={HashLink}
                to="/login"
              >
                Login
              </Nav.Link>
              :
              <Nav.Link
                className="text-light px-3 entryButton mt-3 mt-lg-0 mt-md-0"
                as={HashLink}
                to="/login"
              >
                Logout
              </Nav.Link>
              }
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
