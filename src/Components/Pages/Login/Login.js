import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Firebase/Hooks/useAuth";
import StyleSheet from "../../Shared/css/style.module.css";
import googleIcon from "../../../images/google.png";

const Login = () => {
  const [data, setData] = useState({});
  const { googleSignIn, login } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleSignIn(location, navigate);
  };

  const handleInput = (e) => {
    const field = e.target.name;
    let value = e.target.value;
    // console.log(value);
    const newField = { ...data };
    newField[field] = value;
    setData(newField);
    // console.log(newField);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(data.email, data.password, location, navigate);
  };

  return (
    <div>
      <div
        id="banner"
        className="inner-page-cover px-lg-0 px-1 d-flex flex-column justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <Container>
          <Row>
            <Col
              lg={6}
              sm={12}
              xs={12}
              md={12}
              className="pt-lg-0 pt-5 mx-auto text-center text-light"
            >
              <h1 className="display-6 fw-bold">Login</h1>
              <p className="fs-6 pt-3">
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/home"
                >
                  Home
                </Link>{" "}
                / <span>Login</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5 container">
        <Row>
          <Col className="mx-auto" lg={6} sm={12} md={6} xs={12}>
            <Form onSubmit={handleLogin} className="bg-white border p-3 mt-5">
              <h3 className="text-center mb-4">Log in Please</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  required
                  onBlur={handleInput}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  required
                  onBlur={handleInput}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <button style={{width:"100%"}}
                className={StyleSheet.ourbtn}
                variant="primary"
                type="submit"
              >
                Login
              </button>
              <div className="text-center my-5">
                <span className="">You have no account?</span>
                <Link
                  to="/registration"
                  className="ms-3"
                  variant="primary"
                  type="submit"
                >
                  Create an account now
                </Link>
              </div>
              <hr />
              <Form.Group
                className="mb-3 d-flex justify-content-center"
                controlId="formBasicCheckbox"
              >
                <button
                  onClick={handleGoogle}
                  className="btn rounded w-100"
                >
                  {" "}
                  <div className="d-flex justify-content-center gap-3 shadow py-3 align-items-center">
                    <img className="bg-light" src={googleIcon} alt="" />
                    <span>Continue with google</span>
                  </div>
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
