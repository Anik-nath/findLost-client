import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bangladesh from '../../images/bangladesh.png';
import StyleSheet from '../Shared/css/style.module.css';

const ChooseCity = () => {
  const [location,setLocation] = useState([]);

  useEffect(()=>{
    fetch('./fakeLocation.json')
    .then(res=> res.json())
    .then(data => setLocation(data))
  },[]);

  return (
    <div className="py-5 position-relative">
       <div className="container ">
       <Row className={StyleSheet.choosecity}>
          <Col lg="8" sm="12" md="6">
            <Row>
              {
                location.map(location => 
                  <Col key={location.id} className="text-start mb-3" lg="4" sm="4" md="4" xs="6">
                <Link to="/" className="text-black text-decoration-none">
                  <small><i className="fas fa-map-marker-alt map-marker pe-3"></i>{location.city} ({location.count})</small>
                  </Link>
              </Col>
                  )
              }
            </Row>
          </Col>
          <Col lg="4" sm="12" md="6">
           <img className="w-75" src={bangladesh} alt="" />
          </Col>
        </Row>
        
        {/*Custom shape  */}
        <div className="position-absolute bottom-0 end-0">
          <img
            src="https://ozen-react.envytheme.com/images/services/shape-4.png"
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
       </div>
    </div>
  );
};

export default ChooseCity;
