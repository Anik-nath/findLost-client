import React from 'react';
import StyleSheet from '../../Shared/css/style.module.css'
const Demo = () => {
    return (
        <div>
            <div className="parent pt-5 position-relative">
            <div className="container py-5">
        <div className="row">
          <div className="col-md-3 text-start">
            <h5 className="text-uppercase font-weight-bold mb-4">KhujaKhuji.com</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </div>

          <div className="col-md-2 mx-auto">
            <h5 className="text-uppercase font-weight-bold mb-4">CONTACT</h5>
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
            <h5 className="text-uppercase font-weight-bold mb-4">MY ACCOUNT</h5>
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
            <h5 className="text-uppercase font-weight-bold mb-4">FOLLOW US</h5>
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
                <div className="copywrite bg-warning py-3 text-center">@2021 -copy</div>
                <div className={StyleSheet.shape1}>
                    <img src="https://ozen-react.envytheme.com/images/footer/shape-5.png" alt="" />
                </div>
                <div className={StyleSheet.shape2}>
                    <img src="https://ozen-react.envytheme.com/images/footer/shape-1.png" alt="" />
                </div>
                <div className={StyleSheet.shape3}>
                    <img src="https://ozen-react.envytheme.com/images/footer/shape-2.png" alt="" />
                </div>
                <div className={StyleSheet.shape4}>
                    <img src="https://ozen-react.envytheme.com/images/footer/shape-3.png" alt="" />
                </div>
                <div className={StyleSheet.shape5}>
                    <img src="https://ozen-react.envytheme.com/images/footer/shape-4.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Demo;