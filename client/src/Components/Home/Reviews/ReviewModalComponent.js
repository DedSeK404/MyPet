import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import { MDBContainer, MDBCard } from "mdb-react-ui-kit";
import Toast from "react-bootstrap/Toast";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button, Container, Row } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../../JS/actions/reviewactions";


const ReviewModalComponent = ({ data, setShow }) => {
  const currentUser = useSelector((state) => state.userR.currentUser);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const rate = { rating: value };
  console.log(value);
  const [review, setReview] = useState({
    review: "",
    client: data.client,
    sitter: data.sitter,
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    img: currentUser.img,
  }); 
  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(addReview({ ...review, ...rate }));
    setShow(false);
  };
  console.log({ ...review, ...rate });
  return (
    <Container>
      <Row>
        <Card.Img
          style={{ width: "35%" }}
          variant="top"
          src="https://svgshare.com/i/rSt.svg"
          className="m-auto"
        />
      </Row>
      <Row>
        <Col sm={8} className="m-auto">
          <MDBContainer>
            <MDBCard
              className="mb-3"
              style={{ borderRadius: ".5rem", background: "#FEF1DD" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <h6
                  style={{
                    background: "black",
                    color: "white",
                    padding: "20px",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "7px",
                  }}
                >
                  Before you go, please leave a review and rate your experience
                  with this Sitter{" "}
                </h6>{" "}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              ></div>

              <hr />
              <Toast bg="dark" style={{ width: "90%", margin: "auto" }}>
                <Toast.Header closeButton={false}>
                  <strong className="me-auto">Select stars</strong>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </Toast.Header>
                <Toast.Body>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Leave a comment here"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      name="review"
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Toast.Body>
              </Toast>
              <hr />
              <Button
                style={{ width: "90%", margin: "0px auto 10px" }}
                variant="success"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </MDBCard>
          </MDBContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewModalComponent;
