import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SitterProfileComponent from "./SitterProfileComponent";
import "./SitterProfileModal.css"
import SitterReviewsComponent from "./SitterReviewsComponent";

const SitterProfileModal = (props) => {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen
      className="a"
    >
        <Modal.Header>
        <Col sm={10} className="m-auto">
        <Button style={{width:"100%"}} variant="danger" onClick={props.onHide}>Close</Button>
        </Col>
      </Modal.Header>
      <Modal.Body >
        <Container  >
          <Row >
            <Col xs={12} md={7} style={{marginTop:"2%"}}>
             <SitterProfileComponent data={props.data}/>
            </Col>
            <Col xs={6} md={5} style={{marginTop:"2%"}}>
              <SitterReviewsComponent data={props.data}/>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      
    </Modal>
  );
};

export default SitterProfileModal;
