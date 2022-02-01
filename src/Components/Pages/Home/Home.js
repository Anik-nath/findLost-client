import React from "react";
import { Container } from "react-bootstrap";
import { ChangeTitle } from "../../../generalFunction/titlechange";
import ChooseCity from "../../ChooseCity/ChooseCity";
import StyleSheet from "../../Shared/css/style.module.css";
import Testimonial from "../../Shared/Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import LatestAdd from "../LatestAdd/LatestAdd";

const Home = () => {
  ChangeTitle("Home");
  return (
    <div>
      <div className={StyleSheet.banner}>
        <div className="container py-5 text-center">
          <h6 className="text-light lead">Simple, fast and efficient</h6>
          <h1 className="text-light py-2 h1">LOST AND FOUND NEAR YOU</h1>

          <div className="w-75 mx-auto d-flex flex-row justify-content-center py-4 align-items-center">
            <input
              className={StyleSheet.searchInput}
              type="text"
              placeholder="What"
            />
            <input
              className={StyleSheet.searchInput}
              type="text"
              placeholder="Where"
            />
            <button className={StyleSheet.searchButton} type="button">
              <i className="fas fa-search px-2"></i>
            </button>
          </div>
        </div>
      </div>

      <ChooseCity></ChooseCity>
      <LatestAdd></LatestAdd>
      <div className="happy-client py-3 text-center">
        <Container className="py-3">
          <div className="text-light">
            <small>TESTIMONIAL</small>
            <h3 className="fw-bold">Success Stories</h3>
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
