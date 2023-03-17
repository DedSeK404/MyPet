import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addpet } from "../../../JS/actions/petactions";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { motion, AnimatePresence } from "framer-motion";

const AddPet = ({ setShow }) => {
  const [img, setimg] = useState("");
  const [petData, setPetData] = useState({});
  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("img", img);
    data.append("name", petData.name);
    data.append("gender", petData.gender);
    data.append("breed", petData.breed);
    data.append("birth_date", petData.birth_date);

    dispatch(addpet(data));
    setShow(false);
  };
  
  return (
    <MDBContainer>
      <h1
        style={{
          marginBottom: "-5%",
          marginTop: "-2%",
          color: "#EAAC8E",
          textAlign: "center",
        }}
      >
        Add a new Pet
      </h1>
      <MDBRow className="justify-content-center">
        <MDBCol md="12" lg="12" xl="12" className="mt-5">
          <MDBCard style={{ borderRadius: "15px", backgroundColor: "#7F5A57" }}>
            <MDBCardBody className="p-4 text-black">
              <div>
                <MDBTypography tag="h6" style={{ color: "white" }}>
                  Please fill the form
                </MDBTypography>
                <div className="d-flex align-items-center justify-content-between mb-3"></div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="flex-grow-1 ms-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <MDBCardText style={{ color: "#FDAD8D" }}>
                        Name
                      </MDBCardText>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                      >
                        <Form.Control
                          type="text"
                          placeholder="enter pet name"
                          required
                          name="name"
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </motion.div>
                  </AnimatePresence>
                  <hr style={{ color: "white" }} />
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <MDBCardText style={{ color: "#FDAD8D" }}>
                        Birth Date
                      </MDBCardText>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                      >
                        <Form.Control
                          type="date"
                          required
                          name="birth_date"
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid date.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </motion.div>
                  </AnimatePresence>
                  <hr style={{ color: "white" }} />
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <MDBCardText style={{ color: "#FDAD8D" }}>
                        gender
                      </MDBCardText>
                      <Form.Select
                        as={Col}
                        md="12"
                        controlId="validationCustom04"
                        name="gender"
                        onChange={handleChange}
                      >
                        <option>Select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Form.Select>
                    </motion.div>
                  </AnimatePresence>
                  <hr style={{ color: "white" }} />
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 2.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <MDBCardText style={{ color: "#FDAD8D" }}>
                        tag
                      </MDBCardText>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                      >
                        <Form.Control
                          type="text"
                          placeholder="enter pet tag"
                          name="tag"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </motion.div>
                  </AnimatePresence>
                  <hr style={{ color: "white" }} />
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <MDBCardText style={{ color: "#FDAD8D" }}>
                        breed
                      </MDBCardText>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom03"
                      >
                        <Form.Control
                          type="text"
                          placeholder="enter pet breed"
                          name="breed"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </motion.div>
                  </AnimatePresence>
                  <hr style={{ color: "white" }} />
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 3.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <MDBCardText style={{ color: "#FDAD8D" }}>
                        Photo
                      </MDBCardText>
                      <input
                        type="file"
                        name="file"
                        onChange={(e) => setimg(e.target.files[0])}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-3"></div>{" "}
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  onClick={handleSubmit}
                  variant="outline-success"
                  size="lg"
                >
                  <i class="far fa-plus-square"></i> Add pet
                </Button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddPet;
