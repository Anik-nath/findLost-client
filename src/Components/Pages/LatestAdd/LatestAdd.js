import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Row, Spinner } from "react-bootstrap";

const LatestAdd = () => {
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdds(data));
  }, []);

  return (
    <div className="pb-5 latest-add">
      <div className="py-3 text-center">
        <Container className="py-3">
          <div className="text-dark">
            <small>Find & Lost</small>
            <h3 className="fw-bold ourTitle">Latest ads</h3>
          </div>
        </Container>
      </div>
      <Container>
     
      {
        adds.length == 0 && 
        <div className="text-center">
        <Spinner animation="border" variant="secondary" />
        </div>
      }
        <Row className="row-cols-lg-4 row-cols-2 g-4 py-5">
          {adds.slice(8,16).map((add) => (
            <Col key={add.id}>
              <div style={{height:'100%'}} className="card latest-add-card shadow">
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={add.image}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{add.title}</Card.Title>
                  
                  <Badge bg="secondary">Lost</Badge>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">3 mins ago</small>
                </Card.Footer>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LatestAdd;
