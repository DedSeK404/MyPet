import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SitterProfileComponent from "./SitterProfileComponent";
import "./SitterProfileModal.css";
import SitterReviewsComponent from "./SitterReviewsComponent";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const SitterProfileModal = (props) => {
  const [stars, setStars] = useState("");
  
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
          <Button
            style={{ width: "100%" }}
            variant="danger"
            onClick={props.onHide}
          >
            Close
          </Button>
        </Col>
      </Modal.Header>
      <Col sm={10} style={{margin:"auto"}}>
        {stars == "no stars yet" ? (
           <div
           style={{
             display: "flex",
             gap: "20px",
             marginLeft: "1%",
             marginBottom: "-6%",
             
            
           }}
         >
           <p style={{ color: "white",textShadow:"1px 1px 5px black" }}>Average rating</p>
           <p style={{ color: "darkgray", fontSize: "15px" }}>
            Sitter has no reviews yet
          </p>
         </div>
         
        ) : (
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginLeft: "1%",
                marginBottom: "-6%",
                
               
              }}
            >
              <p style={{ color: "white",textShadow:"1px 1px 5px black" }}>Average rating</p>
              <Rating precision={0.5} name="read-only" value={stars} readOnly />
            </div>
          </Box>
        )}
      </Col>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={7} style={{ marginTop: "2%" }}>
              <SitterProfileComponent data={props.data} />
            </Col>

            <Col xs={6} md={5} style={{ marginTop: "2%" }}>
              <SitterReviewsComponent data={props.data} setStars={setStars} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default SitterProfileModal;
