import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import EditOwnerProfile from "./EditOwnerProfile";
import { motion, AnimatePresence } from "framer-motion";
import { getallpets } from "../../../../JS/actions/petactions";

export default function OwnerProfile() {
 
  const [show, setShow] = useState(false);
  const currentUser = useSelector((state) => state.userR.currentUser);
  const authloading = useSelector((state) => state.userR.authloading);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <AnimatePresence>
      <div >
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
              <EditOwnerProfile show={setShow} />
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
            <MDBContainer className="py-5 h-50">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="8" className="mb-4 mb-lg-0">
                  <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                    <MDBRow className="g-0">
                      <MDBCol
                        md="4"
                        className="gradient-custom text-center text-white"
                        style={{
                          borderTopLeftRadius: ".5rem",
                          borderBottomLeftRadius: ".5rem",
                        }}
                      >
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="Avatar"
                          className="my-5"
                          style={{ width: "80px" }}
                          fluid
                        />

                        <MDBTypography tag="h5" style={{ color: "#dd9679" }}>
                          {!authloading ? currentUser.first_name : ""}
                        </MDBTypography>
                        <MDBTypography tag="h5" style={{ color: "#dd9679" }}>
                          {!authloading ? currentUser.last_name : ""}
                        </MDBTypography>

                        <MDBCardText style={{ color: "#49312c" }}>
                          Bio: {!authloading ? currentUser.bio : ""}
                        </MDBCardText>
                        <MDBIcon far icon="edit mb-5" />
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
                              {!authloading ? currentUser.phone : ""}
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
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </motion.section>
        )}
      </div>
    </AnimatePresence>
  );
}
