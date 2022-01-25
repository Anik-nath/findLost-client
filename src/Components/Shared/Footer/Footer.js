import React from "react";
import StyleSheet from "../../Shared/css/style.module.css";
const Footer = () => {
  return (
    <div>
      <div className="footer pt-5 position-relative">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-3 text-start">
              <h3 className="text-uppercase font-weight-bold mb-4">
                KhujaKhuji.com
              </h3>
              <p>
              Best solution for your it startup business consecteturadipiscing elit. Scelerisque amet odio velit auctor. nam elit nulla.
              </p>
            </div>

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">Quick Link</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">
              About Us
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">
              Services
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
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
