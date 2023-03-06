import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Sign_up/Signup.css";
import OwnerForm from "./Signup_Forms/OwnerForm";
import SitterForm from "./Signup_Forms/SitterForm";

function SignUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRight, setShowRight] = useState(false);
  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);

  return (
    <div className="Container">
      <div className="Signup_container">
        <h3
          style={{
            margin: "auto",
            width: "fit-content",
            padding: " 3% 0 3% 0",
            color: "#E19779",
          }}
        >
          Choose which type of account you want to create
        </h3>
        <Row>
          <Col>
            <button className="Signup_owner" onClick={handleShow}>
              Owner Account
            </button>

            <Offcanvas
              placement="start"
              show={show}
              onHide={handleClose}
              backdrop="static"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ color: "#755A58" }}>
                  Sign up as pet owner
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <OwnerForm />
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <button className="Signup_sitter" onClick={handleShowRight}>
              Sitter Account
            </button>

            <Offcanvas
              placement="end"
              show={showRight}
              onHide={handleCloseRight}
              backdrop="static"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ color: "#755A58" }}>
                  Sign up as pet sitter
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <SitterForm />
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignUp;
