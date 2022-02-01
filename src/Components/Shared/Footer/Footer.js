import React from "react";
import StyleSheet from "../../Shared/css/style.module.css";
const Footer = () => {
  return (
    <div>
      <div className="footer pt-5 position-relative">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-3 text-start">
              <h4 className="font-weight-bold mb-3 footer-brand">
                KhujaKhuji.com
              </h4>
              <p className="footer-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                odit.
              </p>
              <div className="d-flex flex-row justify-content-lg-start justify-content-center py-4 py-lg-0  gap-3">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>

            <div className="col-md-2 mx-auto">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Quick Link
              </h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li className="py-2">
                  <a href="#!">All ads</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mx-auto">
              <h6 className="text-uppercase font-weight-bold mb-4">About Us</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li className="py-2">
                  <a href="#!">Terms</a>
                </li>
                <li>
                  <a href="#!">Privacy</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mx-auto">
              <h6 className="text-uppercase font-weight-bold mb-4">
                My Account
              </h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Login</a>
                </li>
                <li className="py-2">
                  <a href="#!">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copywrite text-light py-3 text-center">
          <small>Copyright © 2022 KhujaKhuji.com. All Rights Reserved</small>
        </div>
        <div className={StyleSheet.shape1}>
          <img
            src="https://ozen-react.envytheme.com/images/footer/shape-5.png"
            alt=""
          />
        </div>
        <div className={StyleSheet.shape2}>
          <img
            src="https://ozen-react.envytheme.com/images/footer/shape-1.png"
            alt=""
          />
        </div>
        <div className={StyleSheet.shape3}>
          <img
            src="https://ozen-react.envytheme.com/images/footer/shape-2.png"
            alt=""
          />
        </div>
        <div className={StyleSheet.shape4}>
          <img
            src="https://ozen-react.envytheme.com/images/footer/shape-3.png"
            alt=""
          />
        </div>
        <div className={StyleSheet.shape5}>
          <img
            src="https://ozen-react.envytheme.com/images/footer/shape-4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
