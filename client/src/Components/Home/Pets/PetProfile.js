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
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import PetsEdit from "./PetsEdit";
import { motion, AnimatePresence } from "framer-motion";

const PetProfile = ({ data }) => {
  const [showEdit, setShowEdit] = useState(true);
  const handleClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <>
      {showEdit ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <MDBContainer
              style={{
                backgroundImage: "url(https://svgshare.com/i/rCb.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundColor: "#EAAC8E",
              }}
            >
              <MDBRow className="justify-content-center">
                <MDBCol
                  style={{ paddingBottom: "4%" }}
                  md="8"
                  lg="8"
                  xl="8"
                  className="mt-5"
                >
                  <MDBCard
                    style={{ borderRadius: "15px", backgroundColor: "#7F5A57" }}
                  >
                    <MDBCardBody className="p-4 text-black">
                      <div>
                        <MDBTypography tag="h3" style={{ color: "white" }}>
                          {data.name} <i class="fas fa-paw"></i>
                        </MDBTypography>
                        <div className="d-flex align-items-center justify-content-between mb-3"></div>
                      </div>
                      <div className="d-flex align-items-center mb-4">
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            style={{ width: "70px",height:"70px", borderRadius:"50%" }}
                            className="img-fluid border border-light border-1"
                            src={data.img}
                            alt="https://cdn.dribbble.com/users/458522/screenshots/15252882/media/b8ec8a7867ffb2f53f4689edc222e1a1.png?compress=1&resize=400x400"
                            fluid
                          />
                         
                        </div>
                        <div
                          className="flex-grow-1 ms-3"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <div>
                            <MDBCardText style={{ color: "#FDAD8D" }}>
                              Breed
                            </MDBCardText>
                            <MDBCardText style={{ color: "white" }}>
                              {data.breed}
                            </MDBCardText>
                          </div>
                          <div>
                            <MDBCardText style={{ color: "#FDAD8D" }}>
                              Gender
                            </MDBCardText>
                            <MDBCardText style={{ color: "white" }}>
                              {data.gender}
                            </MDBCardText>
                          </div>
                          <div>
                            <MDBCardText style={{ color: "#FDAD8D" }}>
                              Birth day
                            </MDBCardText>
                            <MDBCardText style={{ color: "white" }}>
                              {data.birth_date.slice(0, -14)}
                            </MDBCardText>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3"></div>{" "}
                      <MDBCardText style={{ color: "#FDAD8D" }}>
                        Manage pet profile
                      </MDBCardText>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          onClick={handleClick}
                          variant="outline-light"
                          size="sm"
                        >
                          <i class="fas fa-edit"></i> Edit
                        </Button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </motion.div>
        </AnimatePresence>
      ) : (
        <PetsEdit data={data} setShowEdit={setShowEdit} />
      )}
    </>
  );
};

export default PetProfile;
