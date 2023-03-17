import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "react-bootstrap";
import AddPet from "./AddPet";
import PetProfile from "./PetProfile";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "./Pets.css";

export default function PetsTab() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const pets = useSelector((state) => state.petR.pets);
  const loading = useSelector((state) => state.petR.loading);
  const currentUser = useSelector((state) => state.userR.currentUser);

  return (
    <AnimatePresence>
      <div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          ></motion.div>
        </AnimatePresence>

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
          <MDBContainer className="py-5 h-50">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="12" className="mb-4 mb-lg-0">
                <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                  <MDBRow className="g-0">
                    <Button onClick={handleClick} variant="outline-success">
                      {show ? "Hide form" : "Add a pet"}
                    </Button>

                    <MDBCol md="12">
                      <MDBCardBody className="p-4">
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
                              <AddPet setShow={setShow} />
                            </motion.div>
                          </AnimatePresence>
                        ) : (
                          ""
                        )}
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                  <h1
                    style={{
                      marginTop: "-3%",
                      color: "#EAAC8E",
                      textAlign: "center",
                    }}
                  >
                    My Pets
                  </h1>
                  <MDBCol lg="12" className="mb-4 mb-lg-0">
                    <Carousel>
                      {pets.map((e) =>
                        e.user == currentUser._id ? (
                          <Carousel.Item interval={100000}>
                            <PetProfile data={e} />
                          </Carousel.Item>
                        ) : (
                          ""
                        )
                      )}
                    </Carousel>
                  </MDBCol>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </motion.section>
      </div>
    </AnimatePresence>
  );
}
