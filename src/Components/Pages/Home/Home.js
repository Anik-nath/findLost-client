import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChooseCity from "../../ChooseCity/ChooseCity";
import StyleSheet from "../../Shared/css/style.module.css";
import Testimonial from "../../Shared/Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className={StyleSheet.banner}>
        <div className="container py-5 text-center">
          <h5 className="text-light display-6">Simple, fast and efficient</h5>
          <h1 className="text-light py-3 display-4">LOST AND FOUND NEAR YOU</h1>
          <Link to="/">
            <button className={StyleSheet.ourbtn}>Find More</button>
          </Link>
        </div>
      </div>
      <div id="seach-area">
        <Container className={StyleSheet.searchbox}>
          <div className="d-flex justify-content-center py-4 align-items-center">
            <div>
              <InputGroup size="sm" >
                <InputGroup.Text id="inputGroup-sizing-sm" className="py-2">
                 What
                </InputGroup.Text>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </div>
            <div>
              <InputGroup size="sm" >
                <InputGroup.Text id="inputGroup-sizing-sm" className="py-2">
                  Where
                </InputGroup.Text>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </div>
            <div>
              <button className={StyleSheet.searchbtn}>Search</button>
            </div>
          </div>
          {/* shape */}
          <div className="position-absolute shape  top-100 end-0">
          <img
            src="https://ozen-react.envytheme.com/images/projects/shape-5.png"
            alt=""
          />
        </div>
          <div className="position-absolute shape  top-0 start-0">
          <img
            src="https://ozen-react.envytheme.com/images/projects/shape-4.png"
            alt=""
          />
        </div>
       
        </Container>
      </div>
      <ChooseCity></ChooseCity>
      <div className="happy-client py-3 text-center">
        <Container className="py-3">
            <div className="text-light">
            <small>TESTIMONIAL</small>
            <h1 className="display-6 fw-bold">Happy Clients</h1>
            </div>
        <Testimonial></Testimonial>
        </Container>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;

/* 
https://preview.themeforest.net/item/ecolife-multipurpose-ecommerce-shopify-theme/full_screen_preview/29946024?_ga=2.73815378.1756847630.1641737342-1191130943.1633288632
https://www.lostings.com/
*/
