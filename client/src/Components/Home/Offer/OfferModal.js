import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";

function OfferModal({ handleClose, show, data }) {
  const pets = useSelector((state) => state.petR.pets);

  const currentUser = useSelector((state) => state.userR.currentUser);

  return (
    <>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send an offer to {data.first_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h5 style={{paddingBottom:"20px"}} >Please Fill the form</h5> 
        
          <Row className="g-3">
            <Col >
            <h6 style={{color:"#DD9679"}}>Describe the job for the sitter</h6>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Description"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a description here"
                  style={{ height: "120px" }}
                />
              </FloatingLabel>
            </Col>
            <Col >
            <h6 style={{color:"#DD9679"}}>Choose which pet</h6>
              <FloatingLabel controlId="floatingSelectGrid" label="Select pet">
                <Form.Select aria-label="Floating label select example">
                  {pets.map((e) =>
                    e.user == currentUser._id ? (
                      <option value={e._id}>{e.name}</option>
                    ) : (
                      ""
                    )
                  )}
                </Form.Select>
                <hr/>
                <Form>
      <Row>
        <Col style={{display:"flex", alignItems:"center"}} sm={3}>
          <h6 style={{color:"green"}}>Price </h6>
        </Col>
        <Col sm={9}>
          <Form.Control placeholder="D.t" />
        </Col>
        
      </Row>
    </Form>
              </FloatingLabel>
            </Col>
            <hr/>
            <h5 style={{paddingBottom:"20px"}}>Please choose date</h5>
            
            <Row style={{display:"flex", alignItems:"center"}} sm={12}>
              <Col sm={1}>
                <h6 style={{color:"#DD9679"}}>From:</h6>
              </Col>{" "}
              <Col sm={5}>
                <Form.Control className="mb-3" name="start_date" type="date" placeholder="" />
              </Col>{" "}
              <Col sm={1}>
                <h6 style={{color:"#DD9679"}}>To:</h6>
              </Col>{" "}
              <Col sm={5}>
                {" "}
                <Form.Control className="mb-3" name="end_date" type="date" placeholder="" />
              </Col>
            </Row>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Send offer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OfferModal;
