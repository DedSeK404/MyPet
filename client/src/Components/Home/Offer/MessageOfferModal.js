import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { addOffer, getUniqueOffers } from "../../../JS/actions/offeractions";

function MessageOfferModal({ handleClose, show, data, OfferData, setOfferData }) {
  const dispatch = useDispatch();

  const pets = useSelector((state) => state.petR.pets);

  const currentUser = useSelector((state) => state.userR.currentUser);
  const handleChange = (e) => {
    setOfferData({
      ...OfferData,
      [e.target.name]: e.target.value,
      client: currentUser._id,
      sitter: data._id,
    });
  };

  const handleClick = () => {
    dispatch(addOffer(OfferData));
    dispatch(getUniqueOffers(currentUser._id));
    handleClose();
  };

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        style={{ background: "rgba(0, 0, 0, 0.7)" }}
      >
        <Modal.Header style={{ background: "white" }} closeButton>
          <Modal.Title style={{ color: "brown" }}>
            Send an offer to {data?.first_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "white" }}>
          <h5 style={{ paddingBottom: "20px" }}>Please Fill the form</h5>

          <Row className="g-3">
            <Col>
              <h6 style={{ color: "#DD9679" }}>
                Describe the job for the sitter
              </h6>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Description"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a description here"
                  style={{ height: "120px" }}
                  name="description"
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col>
              <h6 style={{ color: "#DD9679" }}>Choose which pet</h6>
              <FloatingLabel controlId="floatingSelectGrid" label="Select pet">
                <Form.Select
                  name="pet"
                  onChange={handleChange}
                  aria-label="Floating label select example"
                >
                  <option>Select a pet</option>
                  {pets.map((e) =>
                    e.user == currentUser._id ? (
                      <option value={e._id}>{e.name}</option>
                    ) : (
                      ""
                    )
                  )}
                </Form.Select>
                <hr />
                <Form>
                  <Row>
                    <Col
                      style={{ display: "flex", alignItems: "center" }}
                      sm={3}
                    >
                      <h6 style={{ color: "green" }}>Price </h6>
                    </Col>
                    <Col sm={9}>
                      <Form.Control
                        name="price"
                        onChange={handleChange}
                        placeholder="D.t"
                        required
                      />
                    </Col>
                  </Row>
                </Form>
              </FloatingLabel>
            </Col>
            <hr />
            <h5 style={{ paddingBottom: "20px" }}>Please choose date</h5>

            <Row style={{ display: "flex", alignItems: "center" }} sm={12}>
              <Col sm={1}>
                <h6 style={{ color: "#DD9679" }}>From:</h6>
              </Col>{" "}
              <Col sm={5}>
                <Form.Control
                  className="mb-3"
                  name="start_date"
                  type="date"
                  placeholder=""
                  onChange={handleChange}
                />
              </Col>{" "}
              <Col sm={1}>
                <h6 style={{ color: "#DD9679" }}>To:</h6>
              </Col>{" "}
              <Col sm={5}>
                {" "}
                <Form.Control
                  className="mb-3"
                  name="end_date"
                  type="date"
                  placeholder=""
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ background: "white" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClick}>
            Send offer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MessageOfferModal;
