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
import { Button, Col, Form } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { deletepet, editpet } from "../../../JS/actions/petactions";
import Modal from "react-bootstrap/Modal";

const PetsEdit = ({ data, setShowEdit }) => {
  const [show, setShow] = useState(false);
  const [img, setimg] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [name, setname] = useState(false);
  const [image, setimage] = useState(false);
  const [breed, setbreed] = useState(false);
  const [gender, setgender] = useState(false);
  const [birthDay, setbirthDay] = useState(false);
  const [tag, setTag] = useState(false);

  const [editData, setEditData] = useState({});

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  const idpet = data._id;
console.log(data.birth_date)
  const handleUpdate = () => {
    const data = new FormData();

    data.append("img", img?img:data.img);
    data.append("name", editData.name?editData.name:data.name);
    data.append("tag", editData.tag?editData.tag:data.tag);
    data.append("gender", editData.gender?editData.gender:data.gender);
    data.append("breed", editData.breed?editData.breed:data.gender);
    data.append("birth_date", editData.birth_date?editData.birth_date:data.birth_date);
    data.append("idpet", idpet);
    dispatch(editpet(data));
    setShowEdit(true);
  };

  const handleClick = () => {
    setShowEdit(true);
  };

  const handleClickname = () => {
    setname(!name);
  };
  const handleClicktag = () => {
    setTag(!tag);
  };
  const handleClickimage = () => {
    setimage(!image);
  };
  const handleClickbreed = () => {
    setbreed(!breed);
  };
  const handleClickgender = () => {
    setgender(!gender);
  };
  const handleClickbirthDay = () => {
    setbirthDay(!birthDay);
  };

  const handleDelete = () => {
    const petid = data._id;
    dispatch(deletepet(petid));
    setShow(false);
  };
  return (
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
                      {data.name}{" "}
                      <Button
                        style={{
                          border: "none",
                          background: "transparent",
                          color: "#1596E5",
                        }}
                        className="edit_button"
                        onClick={handleClickname}
                      >
                        <i id="1" class="fas fa-edit"></i>
                      </Button>
                    </MDBTypography>

                    {name ? (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.8,
                            ease: [0, 0.71, 0.2, 1.01],
                          }}
                        >
                          <Form.Control
                            name="name"
                            onChange={handleChange}
                            type="text"
                            placeholder="enter name here"
                          />
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      ""
                    )}

                    <div className="d-flex align-items-center justify-content-between mb-3"></div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <MDBCardImage
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                          }}
                          className="img-fluid border border-light border-1"
                          src={
                            data.img
                              ? data.img
                              : "https://cdn.dribbble.com/users/458522/screenshots/15252882/media/b8ec8a7867ffb2f53f4689edc222e1a1.png?compress=1&resize=400x400"
                          }
                          alt="https://cdn.dribbble.com/users/458522/screenshots/15252882/media/b8ec8a7867ffb2f53f4689edc222e1a1.png?compress=1&resize=400x400"
                          fluid
                        />
                        <Button
                          style={{
                            border: "none",
                            background: "transparent",
                            color: "#1596E5",
                          }}
                          className="edit_button"
                          onClick={handleClickimage}
                        >
                          <i id="1" class="fas fa-edit"></i>
                        </Button>
                        <p style={{ color: "#BF9997" }}>
                          #{data.tag}{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#1596E5",
                            }}
                            className="edit_button"
                            onClick={handleClicktag}
                          >
                            <i id="1" class="fas fa-edit"></i>
                          </Button>
                        </p>
                      </div>
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
                          Breed{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#1596E5",
                            }}
                            className="edit_button"
                            onClick={handleClickbreed}
                          >
                            <i id="1" class="fas fa-edit"></i>
                          </Button>
                        </MDBCardText>
                        <MDBCardText style={{ color: "white" }}>
                          {data.breed}
                        </MDBCardText>
                      </div>
                      <div>
                        <MDBCardText style={{ color: "#FDAD8D" }}>
                          Gender{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#1596E5",
                            }}
                            className="edit_button"
                            onClick={handleClickgender}
                          >
                            <i id="1" class="fas fa-edit"></i>
                          </Button>
                        </MDBCardText>
                        <MDBCardText style={{ color: "white" }}>
                          {data.gender}
                        </MDBCardText>
                      </div>
                      <div>
                        <MDBCardText style={{ color: "#FDAD8D" }}>
                          Birth day{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#1596E5",
                            }}
                            className="edit_button"
                            onClick={handleClickbirthDay}
                          >
                            <i id="1" class="fas fa-edit"></i>
                          </Button>
                        </MDBCardText>
                        <MDBCardText style={{ color: "white" }}>
                          {data.birth_date.slice(0, -14)}
                        </MDBCardText>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3"></div>{" "}
                  {image ? (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <input
                          type="file"
                          name="file"
                          onChange={(e) => setimg(e.target.files[0])}
                        />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    ""
                  )}
                  {birthDay ? (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <Form.Control
                          name="birth_date"
                          onChange={handleChange}
                          type="date"
                          placeholder=""
                        />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    ""
                  )}
                  {gender ? (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <Form.Select
                          as={Col}
                          md="3"
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
                  ) : (
                    ""
                  )}
                  {breed ? (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <Form.Control
                          name="breed"
                          onChange={handleChange}
                          type="text"
                          placeholder="enter breed here"
                        />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    ""
                  )}
                  {tag ? (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <Form.Control
                          name="tag"
                          onChange={handleChange}
                          type="text"
                          placeholder="enter tag here"
                        />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    ""
                  )}
                  <hr style={{ color: "#EAAC8E" }} />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      onClick={handleClick}
                      variant="outline-info"
                      size="sm"
                    >
                      <i class="fas fa-edit"></i> Go back
                    </Button>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={handleShow}
                        >
                          <i class="fas fa-eraser"></i> Delete
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header style={{background:"white"}} closeButton>
                            <Modal.Title>Delete pet profile</Modal.Title>
                          </Modal.Header>
                          <Modal.Body style={{background:"white"}}>
                            Do you want to permenantly delete the profile of
                            this pet?{" "}
                          </Modal.Body>
                          <Modal.Footer style={{background:"white"}}>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                              Delete
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </>

                      <Button
                        onClick={handleUpdate}
                        variant="outline-success"
                        size="sm"
                      >
                        <i class="fas fa-edit"></i> Save changes
                      </Button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default PetsEdit;
