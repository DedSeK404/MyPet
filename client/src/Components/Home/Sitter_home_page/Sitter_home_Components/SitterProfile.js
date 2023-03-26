import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";
import EditSitterProfile from "./EditSitterProfile";
import Loading from "../../../Loading";
import SitterProfileReviews from "./SitterProfileReviews";

export default function SitterProfile({ setUnavailable }) {
  const [show, setShow] = useState(false);
  const currentUser = useSelector((state) => state.userR.currentUser);
  const authloading = useSelector((state) => state.userR.authloading);
  const loading = useSelector((state) => state.userM.loading);
  const handleClick = () => {
    setShow(true);
  };

  return (
    <AnimatePresence>
      <Container>
        <Row>
          <Col sm={7}>
            {show ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <EditSitterProfile
                    setUnavailable={setUnavailable}
                    show={setShow}
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.section
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="vh-100"
                style={{ backgroundColor: "transparent" }}
              >
                <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                  <MDBRow className="g-0">
                    <MDBCol
                      md="4"
                      className="gradient-custom text-center text-white"
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                        background: "rgb(238,174,202)",
                        background:
                          "linear-gradient(187deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                      }}
                    >
                      <MDBCardImage
                        src={
                          currentUser.img
                            ? currentUser.img
                            : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        }
                        alt="Avatar"
                        className="my-5"
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "auto",
                          borderRadius: "50%",
                          border: "2px solid white",
                        }}
                        fluid
                      />
                      <hr style={{ color: "gray" }} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                          marginBottom: "-15%",
                        }}
                      >
                        <i
                          style={{
                            marginTop: "3px",
                            color:
                              currentUser.status == "available"
                                ? "green"
                                : currentUser.status == "unavailable"
                                ? "grey"
                                : currentUser.status == "busy"
                                ? "red"
                                : "",
                          }}
                          class="far fa-user-circle"
                        ></i>
                        <p style={{ color: "black" }}>
                          {currentUser.status == "available" ? (
                            <p style={{ color: "green" }}>Available</p>
                          ) : currentUser.status == "unavailable" ? (
                            <p style={{ color: "grey" }}>Unavailable</p>
                          ) : currentUser.status == "busy" ? (
                            <p style={{ color: "red" }}>Busy</p>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                      <hr style={{ color: "gray" }} />
                      <MDBTypography tag="h5" style={{ color: "white" }}>
                        {!authloading ? currentUser.first_name : ""}
                      </MDBTypography>
                      <MDBTypography tag="h5" style={{ color: "white" }}>
                        {!authloading ? currentUser.last_name : ""}
                      </MDBTypography>
                      <hr style={{ color: "gray" }} />
                      <MDBCardText style={{ color: "#49312c" }}>
                        Bio: {currentUser.bio ? currentUser.bio : ""}
                      </MDBCardText>
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody className="p-4">
                        <MDBTypography tag="h6" style={{ color: "#dd9679" }}>
                          Contacts
                        </MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Email</MDBTypography>
                            <MDBCardText className="text-muted">
                              {!authloading ? currentUser.email : ""}
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Phone</MDBTypography>
                            <MDBCardText className="text-muted">
                              +216 {!authloading ? currentUser.phone : ""}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <MDBTypography tag="h6" style={{ color: "#dd9679" }}>
                          Location
                        </MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-2">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">City</MDBTypography>
                            <MDBCardText className="text-muted">
                              {!authloading ? currentUser.city : ""}
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Adress</MDBTypography>
                            <MDBCardText className="text-muted">
                              {!authloading ? currentUser.adress : ""}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <MDBTypography tag="h6" style={{ color: "#dd9679" }}>
                          Personal informations
                        </MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-2">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Gender</MDBTypography>
                            <MDBCardText className="text-muted">
                              {!authloading ? currentUser.gender : ""}
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Birth-date</MDBTypography>
                            <MDBCardText className="text-muted">
                              {!authloading
                                ? currentUser.birth_date.slice(0, -14)
                                : ""}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <Button onClick={handleClick} variant="outline-info">
                          Manage your profile
                        </Button>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </motion.section>
            )}
          </Col>
          <Col sm={5}>{!show ? <SitterProfileReviews /> : ""}</Col>
        </Row>
      </Container>
    </AnimatePresence>
  );
}
