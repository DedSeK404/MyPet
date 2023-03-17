import React from "react";
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

import { Button } from "react-bootstrap";

import { motion, AnimatePresence } from "framer-motion";

const OwnerDashboard = () => {
  return (
    <AnimatePresence>
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
                  <MDBCardImage
                    src="https://svgshare.com/i/rCe.svg"
                    alt="Avatar"
                    style={{ width: "100vw",pointerEvents: "none" }}
                    fluid
                  />
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </motion.section>
    </AnimatePresence>
  );
};

export default OwnerDashboard;
