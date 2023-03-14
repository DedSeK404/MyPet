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
import { Button, Col, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { editUser } from "../../../../JS/actions/useraction";

export default function EditOwnerProfile({ show }) {
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

  const currentUser = useSelector((state) => state.userR.currentUser);
  const authloading = useSelector((state) => state.userR.authloading);
  const alert = useSelector((state) => state.userR.alert);
console.log(alert)
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
    const editeduser={}
    dispatch(editUser(editData, idUser));
if (alert) {
  return show(true)
}
    setTimeout(() => {
      show(false);
    }, 1000);
  };
  //   const handleEdit = (e) => {
  //     if (showEdit == e.target.id) {
  //       return setShowEdit("");
  //     }
  //     setShowEdit(e.target.id);
  //   };
  
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
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
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
                        <Form.Control type="file" placeholder="" />
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
                              placeholder={
                                !authloading ? currentUser.first_name : ""
                              }
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
                              placeholder={
                                !authloading ? currentUser.last_name : ""
                              }
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
                    Bio:{!authloading ? currentUser.bio : ""}
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
                              placeholder={!authloading ? currentUser.bio : ""}
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
                                    placeholder={
                                      !authloading ? currentUser.email : ""
                                    }
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
                          {!authloading ? currentUser.phone : ""}
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
                                    placeholder={
                                      !authloading ? currentUser.phone : ""
                                    }
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
                                    placeholder={
                                      !authloading ? currentUser.adress : ""
                                    }
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

                    <OverlayTrigger
                      trigger="click"
                      overlay={
                         alert?(
                          <Tooltip id="tooltip-disabled">Something went wrong</Tooltip>
                        ):(
                          <Tooltip id="tooltip-disabled">Changes saved</Tooltip>
                        )
                      }
                    >
                      <Button onClick={handleClick} variant="outline-info">
                        {showPicEdit ||
                        showNameEdit ||
                        showLastNameEdit ||
                        showBioEdit ||
                        showEmailEdit ||
                        showPhoneEdit ||
                        showCityEdit ||
                        showAdressEdit ||
                        showGenderEdit ||
                        showBirthdayEdit
                          ? "Save changes"
                          : "Return to profile"}
                      </Button>
                    </OverlayTrigger>
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
