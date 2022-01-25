import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import brand from '../../../images/logo1-removebg-preview.png'
import stylesheet from '../../Shared/css/style.module.css';

const Navigation = () => {
  return (
    <div>
      <Navbar
        className={stylesheet.Navbarcolor}
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
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
            <Nav className="ms-auto text-center">
              <Nav.Link className="text-light hoverMe" as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link
                className="text-light hoverMe"
                as={HashLink}
                to="/about"
              >
                About Us
              </Nav.Link>
              <Nav.Link className="text-light hoverMe" as={HashLink} to="/ads">
                All ads
              </Nav.Link>
              <Nav.Link
                className="text-light hoverMe"
                as={HashLink}
                to="/contact"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className="text-light hoverMe"
                as={HashLink}
                to="/sign in"
              >
                Sign in
              </Nav.Link>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="text-light">
                  Language
                </Navbar.Text>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
