import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SitterProfileComponent from "./SitterProfileComponent";
import "./SitterProfileModal.css"
import SitterReviewsComponent from "./SitterReviewsComponent";

const SitterProfileModal = (props) => {
  //console.log(props.data);
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
        
        <Button style={{width:"100%"}} variant="danger" onClick={props.onHide}>Close</Button>
        
      </Modal.Header>
      <Modal.Body >
        <Container  >
          <Row >
            <Col xs={12} md={8} style={{marginTop:"2%"}}>
             <SitterProfileComponent data={props.data}/>
            </Col>
            <Col xs={6} md={4} style={{marginTop:"2%"}}>
              <SitterReviewsComponent/>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      
    </Modal>
  );
};

export default SitterProfileModal;
