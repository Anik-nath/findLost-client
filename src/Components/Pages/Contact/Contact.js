import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import StyleSheet from "../../Shared/css/style.module.css";
import contactImage from "../../../images/Get in touch-amico.png";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row pt-5">
      <div className="col-lg-6 col-12 col-md-12">
          <img
            className="w-75"
            src={contactImage}
            alt=""
          />
        </div>
        <div className="col-lg-6 col-12 col-md-12 sm-order-1">
          <Form>
            <h1 className="mb-3 ourTitle">Get in Touch</h1>
            <Row className="mb-0">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  className={StyleSheet.ourInputField}
                  type="name"
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control className={StyleSheet.ourInputField} type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control className={StyleSheet.ourInputField} placeholder="Phone" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select className={StyleSheet.ourInputField} defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>office</option>
                  <option>home</option>
                  <option>shop</option>
                  <option>road</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <FloatingLabel
              className="my-4"
              controlId="floatingTextarea2"
              label="Comments"
            >
              <Form.Control
              className={StyleSheet.ourInputField}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <button className={StyleSheet.ourbtn} type="submit">
              Send Message
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// https://ozen-react.envytheme.com/contact/
// https://storyset.com/illustration/get-in-touch/amico
// https://preview.themeforest.net/item/ozen-react-nextjs-it-startup-template/full_screen_preview/32752023?_ga=2.73398865.337697102.1642970023-1191130943.1633288632
// https://preview.themeforest.net/item/hepro-react-next-it-saas-template/full_screen_preview/25850147?_ga=2.107452864.337697102.1642970023-1191130943.1633288632