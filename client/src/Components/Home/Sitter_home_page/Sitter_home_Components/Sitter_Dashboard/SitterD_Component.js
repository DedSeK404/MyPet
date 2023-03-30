import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./SitterDashboard.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { editoffer, getUniqueOffers } from "../../../../../JS/actions/offeractions";
import { editUser } from "../../../../../JS/actions/usermanagementactions";

const SitterD_Component = ({ data }) => {
  const pets = useSelector((state) => state.petR.pets);
  const owners = useSelector((state) => state.offerR.owners);

   console.log(owners);
  //console.log(data);
  const CurrentUser = useSelector((state) => state.userR.currentUser);
  const isBusy = CurrentUser.status;
  const dispatch = useDispatch();
  const Offerstatus = data.status;
  const [disabled, setDisabled] = useState(isBusy == "busy" ? true : false); 
  const [disabledD, setDisabledD] = useState(
    Offerstatus == "active" || Offerstatus == "declined" ? true : false
  );
  const idoffer = data._id;

  const handleSubmitAccept = () => {
    dispatch(editUser({ editData: { status: "busy" }, idUser: data.sitter,token:true }));  
    dispatch(editoffer({ idoffer: idoffer, status: "active" })); 
    
    setDisabled(true);
  }; 

  const handleSubmitDecline = () => {
    dispatch(editoffer({ idoffer: idoffer, status: "declined" }));
    dispatch(getUniqueOffers(CurrentUser._id))
    setDisabledD(true);
  };

  return (
    <>
      <Container
        fluid
        className="Card_Container"
        style={{ marginBottom: "5%" }}
      >
        <Row
          className={
            Offerstatus == "unknown"
              ? "mb-3 boxUnknown"
              : Offerstatus == "active"
              ? "mb-3 boxActive"
              : Offerstatus == "declined"
              ? "mb-3 boxDeclined"
              : Offerstatus == "completed"
              ? "mb-3 boxCompleted"
              : ""
          }
        >
          <div style={{ display: "flex" }} lg="12" fluid className="card-body">
            <Col sm={12}>
              <section>
                <div className="card shadow-0 border rounded-3">
                  <div className="card-body">
                    <div className="row">
                      <Col>
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="first"
                        >
                          <Row>
                            <Col sm={2}>
                              <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">
                                    Description
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="second">Owner</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="third">
                                    Pet <i class="fas fa-paw"></i>
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content
                                style={{ marginLeft: "5%", width: "100%" }}
                              >
                                <Tab.Pane eventKey="first">
                                  {" "}
                                  <Col
                                    className="card mb-3"
                                    style={{ padding: "10px" }}
                                  >
                                    <h5 style={{ color: "#DD9679" }}>
                                      Job description:
                                    </h5>
                                    <p>{data.description}</p>
                                    <hr />
                                    <h5 style={{ color: "#DD9679" }}>
                                      Job date:
                                    </h5>
                                    <div
                                      style={{ display: "flex", gap: "20px" }}
                                    >
                                      <p style={{ color: "#7F5A57" }}>From:</p>{" "}
                                      <p>
                                        {" "}
                                        <i
                                          style={{ color: "#7F5A57" }}
                                          class="fas fa-calendar-alt"
                                        ></i>
                                        {data.start_date.slice(0, -14)}
                                      </p>{" "}
                                      <p style={{ color: "#7F5A57" }}>To:</p>{" "}
                                      <p>
                                        {" "}
                                        <i
                                          style={{ color: "#7F5A57" }}
                                          class="fas fa-calendar-alt"
                                        ></i>
                                        {data.end_date.slice(0, -14)}
                                      </p>
                                    </div>
                                  </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  {" "}
                                  <Col>
                                    {owners.map((e) =>
                                      e._id == data.client ? (
                                        //ownerCard
                                        <Card
                                          className="card mb-3"
                                          style={{ width: "100%" }}
                                        >
                                          <div
                                            style={{
                                              background: "#7F5A57",
                                              display: "flex",
                                              alignItems: "center",
                                              padding: "20px",
                                              borderRadius: "5px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                              }}
                                            >
                                              <Card.Img
                                                variant="top"
                                                src={e.img}
                                                style={{
                                                  width: "5rem",
                                                  height: "5rem",
                                                  borderRadius: "50%",
                                                  border: "2px #DD9679 solid",
                                                }}
                                              />
                                              <p style={{ color: "lightgray" }}>
                                                {e.city}
                                              </p>
                                            </div>
                                            <Card.Body>
                                              <Card.Title>
                                                <p
                                                  style={{
                                                    color: "white",
                                                  }}
                                                >
                                                  {e.first_name} {e.last_name}
                                                </p>
                                              </Card.Title>
                                            </Card.Body>
                                          </div>
                                          <ListGroup className="list-group-flush">
                                            <ListGroup.Item
                                              style={{
                                                display: "flex",
                                                gap: "10px",
                                                justifyContent: "start",
                                              }}
                                            >
                                              <p style={{ color: "#DD9679" }}>
                                                Adress
                                              </p>
                                              <p>{e.adress}</p>
                                            </ListGroup.Item>
                                            <ListGroup.Item
                                              style={{
                                                display: "flex",
                                                gap: "10px",
                                                justifyContent: "start",
                                              }}
                                            >
                                              <p style={{ color: "#DD9679" }}>
                                                Mobile
                                              </p>
                                              <p>{e.phone}</p>
                                            </ListGroup.Item>
                                          </ListGroup>
                                        </Card>
                                      ) : (
                                        ""
                                      )
                                    )}
                                  </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                  <Col>
                                    {pets.map((e) =>
                                      e._id == data.pet ? (
                                        //petCard
                                        <Card
                                          className="card mb-3"
                                          style={{ width: "100%" }}
                                        >
                                          <div
                                            style={{
                                              background: "#7F5A57",
                                              display: "flex",
                                              alignItems: "center",
                                              padding: "20px",
                                              borderRadius: "5px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                              }}
                                            >
                                              <Card.Img
                                                variant="top"
                                                src={e.img}
                                                style={{
                                                  width: "5rem",
                                                  height: "5rem",
                                                  borderRadius: "50%",
                                                  border: "2px #DD9679 solid",
                                                }}
                                              />
                                              <p
                                                style={{
                                                  color: "lightgray",
                                                }}
                                                className="card-text"
                                              >
                                                #{e.tag}
                                              </p>
                                            </div>
                                            <Card.Body>
                                              <Card.Title>
                                                <p
                                                  style={{
                                                    color: "white",
                                                  }}
                                                >
                                                  {e.name}
                                                </p>
                                              </Card.Title>
                                            </Card.Body>
                                          </div>
                                          <ListGroup className="list-group-flush">
                                            <ListGroup.Item
                                              style={{
                                                display: "flex",
                                                gap: "10px",
                                                justifyContent: "start",
                                              }}
                                            >
                                              <p style={{ color: "#DD9679" }}>
                                                Breed
                                              </p>
                                              <p>{e.breed}</p>
                                            </ListGroup.Item>
                                            <ListGroup.Item
                                              style={{
                                                display: "flex",
                                                gap: "10px",
                                                justifyContent: "start",
                                              }}
                                            >
                                              <p style={{ color: "#DD9679" }}>
                                                Gender
                                              </p>
                                              <p>{e.gender}</p>
                                            </ListGroup.Item>
                                          </ListGroup>
                                        </Card>
                                      ) : (
                                        ""
                                      )
                                    )}
                                  </Col>
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>

                      <Col className="border-start" sm={3}>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <h4 className="mb-1 me-1">{data.price}D.t</h4>
                        </div>
                        <hr />
                        <h6 style={{ color: "#734E4A" }}>
                          Choose whether you like to accept or decline the offer
                        </h6>
                        <hr />
                        <div className="d-flex flex-column mt-4">
                          {Offerstatus == "completed" ||
                          Offerstatus == "declined" ? (
                            ""
                          ) : (
                            <button
                              className={
                                isBusy == "busy"
                                  ? "btn btn-outline-success btn-sm"
                                  : "btn btn-success btn-sm"
                              }
                              type="button"
                              onClick={handleSubmitAccept}
                              disabled={disabled ? true : false}
                              
                            >
                             <h3>{data.status == "active"
                                ? "Offer accepted"
                                : isBusy == "busy"
                                ? "You already have an ongoing Job"
                                : "Accept"}</h3> 
                            </button>
                          )}
                          {Offerstatus == "unknown" ? (
                            <button
                              className="btn btn-outline-danger btn-sm mt-2"
                              type="button"
                              onClick={handleSubmitDecline}
                              disabled={disabledD ? true : false}
                            >
                              {disabledD ? "Offer declined" : "Decline"}
                            </button>
                          ) : Offerstatus == "active" ? (
                            ""
                          ) : Offerstatus == "completed" ? (
                            <button
                              className="btn btn-info btn-lg "
                              type="button"
                              disabled
                            >
                              <h2 style={{ color: "white" }}>
                                {" "}
                                <i class="fas fa-clipboard-check"></i>
                                Completed
                              </h2>
                            </button>
                          ) : Offerstatus == "declined" ? (
                            <button
                              className="btn btn-danger btn-lg "
                              type="button"
                              disabled
                            >
                              <i class="fas fa-ban"></i>
                              <h4 style={{ color: "white" }}>
                                {" "}
                                Offer declined
                              </h4>
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-danger btn-sm mt-2"
                              type="button"
                              onClick={handleSubmitDecline}
                              disabled={disabledD ? true : false}
                            >
                              {disabledD ? "Offer declined" : "Decline"}
                            </button>
                          )}
                        </div>
                      </Col>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="card-footer text-muted"
                  >
                    Offer created on {data.created_on.slice(0, -14)}
                  </div>
                </div>
              </section>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SitterD_Component;
