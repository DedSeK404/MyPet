import React, { useRef, useState } from "react";
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
import {
  Button,
  Col,
  Form,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  deleteUser,
  editUser,
} from "../../../../JS/actions/usermanagementactions";
import { useNavigate } from "react-router-dom";

export default function EditSitterProfile({ show }) {
  const [img, setimg] = useState("");

  const [shows, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPicEdit, setShowPicEdit] = useState(false);
  const [showNameEdit, setShowNameEdit] = useState(false);
  const [showLastNameEdit, setShowLastNameEdit] = useState(false);
  const [showBioEdit, setShowBioEdit] = useState(false);
  const [showEmailEdit, setShowEmailEdit] = useState(false);
  const [showPhoneEdit, setShowPhoneEdit] = useState(false);
  const [showCityEdit, setShowCityEdit] = useState(false);
  const [showAdressEdit, setShowAdressEdit] = useState(false);
  const [showGenderEdit, setShowGenderEdit] = useState(false);
  const [showBirthdayEdit, setShowBirthdayEdit] = useState(false);
  const [showPasswordEdit, setShowPasswordEdit] = useState(false);

  const currentUser = useSelector((state) => state.userR.currentUser);
  const authloading = useSelector((state) => state.userR.authloading);

  const dispatch = useDispatch();
  const [editData, setEditData] = useState({
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    bio: currentUser.bio,
    email: currentUser.email,
    phone: currentUser.phone,
    city: currentUser.city,
    adress: currentUser.adress,
    gender: currentUser.gender,
    birth_date: currentUser.birth_date,
  });

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  const idUser = currentUser._id;

  const handleSumbit = () => {
    dispatch(editUser(editData, idUser));
  };
  //console.log(editData);
  const handleEditPic = () => {
    setShowPicEdit(!showPicEdit);
  };

  const handleEditPassword = () => {
    setShowPasswordEdit(!showPasswordEdit);
  };

  const handleEditName = () => {
    setShowNameEdit(!showNameEdit);
  };
  const handleEditLastName = () => {
    setShowLastNameEdit(!showLastNameEdit);
  };
  const handleEditBio = () => {
    setShowBioEdit(!showBioEdit);
  };
  const handleEditEmail = () => {
    setShowEmailEdit(!showEmailEdit);
  };
  const handleEditPhone = () => {
    setShowPhoneEdit(!showPhoneEdit);
  };
  const handleEditCity = () => {
    setShowCityEdit(!showCityEdit);
  };
  const handleEditAdress = () => {
    setShowAdressEdit(!showAdressEdit);
  };
  const handleEditGender = () => {
    setShowGenderEdit(!showGenderEdit);
  };
  const handleEditBirthday = () => {
    setShowBirthdayEdit(!showBirthdayEdit);
  };

  const handleClick = () => {
    const data = new FormData();

    data.append("first_name", editData.first_name);
    data.append("last_name", editData.last_name);
    data.append("bio", editData.bio);
    data.append("email", editData.email);
    data.append("phone", editData.phone);
    data.append("city", editData.city);
    data.append("adress", editData.adress);
    data.append("gender", editData.gender);
    data.append("birth_date", editData.birth_date);
    //data.append("password", editData.password);
    data.append("img", img);
    //console.log(data);
    dispatch(editUser(data, idUser));
  };

  const handleClickReturn = () => {
    show(false);
  };
  const navigate = useNavigate();
  const handleClickDelete = () => {
    const userid = currentUser._id;
    dispatch(deleteUser(userid, navigate));
    setShow(false);
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "transparent" }}>
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
                    src={
                      currentUser.img
                        ? currentUser.img
                        : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    }
                    alt="Avatar"
                    className="my-5"
                    style={{
                      width: "100px",
                      borderRadius: "50%",
                      border: "2px solid #755A58",
                    }}
                    fluid
                  />

                  <Button
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#ff4500",
                    }}
                    onClick={handleEditPic}
                    className="edit_button"
                  >
                    <i id="1" class="fas fa-edit"></i>
                  </Button>
                  {showPicEdit ? (
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
                  <MDBTypography tag="h5" style={{ color: "#dd9679" }}>
                    {!authloading ? currentUser.first_name : ""}

                    <Button
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "#ff4500",
                      }}
                      onClick={handleEditName}
                      className="edit_button"
                    >
                      <i id="2" class="fas fa-edit"></i>
                    </Button>
                    {showNameEdit ? (
                      <>
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
                              name="first_name"
                              onChange={handleChange}
                              type="text"
                              placeholder="first name"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                          </motion.div>
                        </AnimatePresence>
                      </>
                    ) : (
                      ""
                    )}
                  </MDBTypography>
                  <MDBTypography tag="h5" style={{ color: "#dd9679" }}>
                    {!authloading ? currentUser.last_name : ""}
                    <Button
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "#ff4500",
                      }}
                      className="edit_button"
                      onClick={handleEditLastName}
                    >
                      <i id="3" class="fas fa-edit"></i>
                    </Button>
                    {showLastNameEdit ? (
                      <>
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
                              name="last_name"
                              onChange={handleChange}
                              type="text"
                              placeholder="last name"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                          </motion.div>
                        </AnimatePresence>
                      </>
                    ) : (
                      ""
                    )}
                  </MDBTypography>

                  <MDBCardText style={{ color: "#49312c" }}>
                    Bio:{currentUser.bio ? currentUser.bio : ""}
                    <Button
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "#ff4500",
                      }}
                      className="edit_button"
                      onClick={handleEditBio}
                    >
                      <i className="edit_button" id="4" class="fas fa-edit"></i>
                    </Button>
                    {showBioEdit ? (
                      <>
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
                              name="bio"
                              onChange={handleChange}
                              type="text"
                              placeholder="bio"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                          </motion.div>
                        </AnimatePresence>
                      </>
                    ) : (
                      ""
                    )}
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
                        <MDBTypography tag="h6">
                          Email{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#ff4500",
                            }}
                            className="edit_button"
                            onClick={handleEditEmail}
                          >
                            <i id="5" class="fas fa-edit"></i>
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {!authloading ? currentUser.email : ""}

                          {showEmailEdit ? (
                            <>
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
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="email"
                                  />
                                  <Form.Text className="text-muted"></Form.Text>
                                </motion.div>
                              </AnimatePresence>
                            </>
                          ) : (
                            ""
                          )}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">
                          Phone{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#ff4500",
                            }}
                            className="edit_button"
                            onClick={handleEditPhone}
                          >
                            <i id="6" class="fas fa-edit"></i>
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          +216 {!authloading ? currentUser.phone : ""}
                          {showPhoneEdit ? (
                            <>
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
                                    name="phone"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="phone number"
                                  />
                                  <Form.Text className="text-muted"></Form.Text>
                                </motion.div>
                              </AnimatePresence>
                            </>
                          ) : (
                            ""
                          )}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6" style={{ color: "#dd9679" }}>
                      Location
                    </MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-2">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">
                          City{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#ff4500",
                            }}
                            className="edit_button"
                            onClick={handleEditCity}
                          >
                            <i id="7" class="fas fa-edit"></i>
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {!authloading ? currentUser.city : ""}

                          {showCityEdit ? (
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
                                  md="12"
                                  controlId="validationCustom04"
                                  name="city"
                                  onChange={handleChange}
                                >
                                  <option>Select a city</option>
                                  <option value="Ariana">Ariana</option>
                                  <option value="Béja">Béja</option>
                                  <option value="Ben Arous">Ben Arous</option>
                                  <option value="Bizerte">Bizerte</option>
                                  <option value="Gabès">Gabès</option>
                                  <option value="Gafsa">Gafsa</option>
                                  <option value="Jendouba">Jendouba</option>
                                  <option value="Kairouan">Kairouan</option>
                                  <option value="Kasserine">Kasserine</option>
                                  <option value="Kébili">Kébili</option>
                                  <option value="Kef">Kef</option>
                                  <option value="Mahdia">Mahdia</option>
                                  <option value="Manouba">Manouba</option>
                                  <option value="Médenine">Médenine</option>
                                  <option value="Monastir">Monastir</option>
                                  <option value="Nabeul">Nabeul</option>
                                  <option value="Sfax">Sfax</option>
                                  <option value="Sidi Bouzid">
                                    Sidi Bouzid
                                  </option>
                                  <option value="Siliana">Siliana</option>
                                  <option value="Sousse">Sousse</option>
                                  <option value="Tataouine">Tataouine</option>
                                  <option value="Tozeur">Tozeur</option>
                                  <option value="Tunis">Tunis</option>
                                  <option value="Zaghouan">Zaghouan</option>
                                </Form.Select>
                              </motion.div>
                            </AnimatePresence>
                          ) : (
                            ""
                          )}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">
                          Adress{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#ff4500",
                            }}
                            className="edit_button"
                            onClick={handleEditAdress}
                          >
                            <i id="8" class="fas fa-edit"></i>
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {!authloading ? currentUser.adress : ""}

                          {showAdressEdit ? (
                            <>
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
                                    name="adress"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="adress"
                                  />
                                  <Form.Text className="text-muted"></Form.Text>
                                </motion.div>
                              </AnimatePresence>
                            </>
                          ) : (
                            ""
                          )}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6" style={{ color: "#dd9679" }}>
                      Personal informations
                    </MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-2">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">
                          Gender{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#ff4500",
                            }}
                            className="edit_button"
                            onClick={handleEditGender}
                          >
                            <i id="9" class="fas fa-edit"></i>
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {!authloading ? currentUser.gender : ""}

                          {showGenderEdit ? (
                            <>
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
                                    md="12"
                                    controlId="validationCustom04"
                                    name="gender"
                                    onChange={handleChange}
                                  >
                                    <option>Select a city</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                  </Form.Select>
                                </motion.div>
                              </AnimatePresence>
                            </>
                          ) : (
                            ""
                          )}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">
                          Birth-date{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#ff4500",
                            }}
                            className="edit_button"
                            onClick={handleEditBirthday}
                          >
                            <i id="10" class="fas fa-edit"></i>
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {!authloading
                            ? currentUser.birth_date.slice(0, -14)
                            : ""}

                          {showBirthdayEdit ? (
                            <>
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
                                  <Form.Text className="text-muted"></Form.Text>
                                </motion.div>
                              </AnimatePresence>
                            </>
                          ) : (
                            ""
                          )}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6" style={{ color: "#dd9679" }}>
                      Security
                    </MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-2">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">
                          Password{" "}
                          <Button
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "#ff4500",
                            }}
                            className="edit_button"
                            onClick={handleEditPassword}
                          >
                            <i id="9" class="fas fa-edit"></i>
                          </Button>
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {showPasswordEdit ? (
                            <>
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
                                    name="password"
                                    onChange={handleChange}
                                    type="password"
                                    placeholder=""
                                  />

                                  <Form.Text className="text-muted"></Form.Text>
                                </motion.div>
                              </AnimatePresence>
                            </>
                          ) : (
                            ""
                          )}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBCardText className="text-muted">
                          <AnimatePresence>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.8,
                                ease: [0, 0.71, 0.2, 1.01],
                              }}
                            >
                              <>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={handleShow}
                                >
                                  <i class="fas fa-eraser"></i> Delete profile
                                </Button>

                                <Modal show={shows} onHide={handleClose}>
                                  <Modal.Header closeButton>
                                    <Modal.Title>Delete profile</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    Do you want to permenantly delete your
                                    profile?{" "}
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button
                                      variant="secondary"
                                      onClick={handleClose}
                                    >
                                      Close
                                    </Button>
                                    <Button
                                      variant="danger"
                                      onClick={handleClickDelete}
                                    >
                                      Delete
                                    </Button>
                                  </Modal.Footer>
                                </Modal>
                              </>
                            </motion.div>
                          </AnimatePresence>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        onClick={handleClickReturn}
                        variant="outline-info"
                      >
                        Return to Profile
                      </Button>
                      <OverlayTrigger
                        trigger="click"
                        overlay={
                          <Tooltip id="tooltip-disabled">Changes saved</Tooltip>
                        }
                      >
                        <Button onClick={handleClick} variant="outline-success">
                          Save changes
                        </Button>
                      </OverlayTrigger>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
