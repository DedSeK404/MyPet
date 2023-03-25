import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard } from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Toast } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const SitterReviewsComponent = () => {
  const reviews = useSelector((state) => state.reviewR.reviews);
  const currentUser = useSelector((state) => state.userR.currentUser);
  const owners = useSelector((state) => state.offerR.owners);

  console.log(owners);
  return (
    <AnimatePresence>
      <div style={{ backgroundColor: "transparent" }}>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          style={{ backgroundColor: "transparent" }}
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                  <MDBRow>
                    <MDBCol>
                      <div
                        className="overflow-auto"
                        style={{ maxHeight: "70vh" }}
                      >
                        {reviews.map((e) => (
                          <div style={{ padding: "10px" }}>
                            <Toast bg="dark">
                              <Toast.Header closeButton={false}>
                                <Col style={{display:"flex",justifyContent:"space-around"}}>
                                <img
                                  src={e.img}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    border: "1px #212529 solid",
                                  }}
                                  alt=""
                                />

                                <div
                                  style={{
                                    display: "flex",
                                    gap: "5px",
                                    
                                  }}
                                >
                                  <p >{e.first_name}</p>
                                  <p>{e.last_name}</p>
                                </div>

                                <Box
                                  sx={{
                                    "& > legend": { mt: 2 },
                                  }}
                                >
                                  <Rating
                                    name="read-only"
                                    value={e.rating}
                                    readOnly
                                  />
                                </Box>
                                </Col>
                              </Toast.Header>
                              <Toast.Body style={{ color: "white" }}>
                                <p>{e.review}</p>
                                <p
                                  style={{
                                    textAlign: "end",
                                    fontSize: "10px",
                                    color: "gray",
                                  }}
                                >
                                  {e.created_on.slice(0, -14)}
                                </p>
                              </Toast.Body>
                            </Toast>
                          </div>
                        ))}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default SitterReviewsComponent;
