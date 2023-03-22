import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./SitterDashboard.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

const SitterD_Component = ({ data }) => {
  const pets = useSelector((state) => state.petR.pets);
  const owners = useSelector((state) => state.offerR.owners);
  console.log(owners);
  // console.log(pets);
  // console.log(data);
  return (
    <>
      <button
        type="button"
        class="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
      <Container fluid className="Card_Container">
        <Row className="mb-3">
          <div style={{ display: "flex" }} lg="12" fluid className="card-body">
            <Col sm={12}>
              <section style={{ backgroundColor: "#eee" }}>
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
                                  <Nav.Link eventKey="third">Pet</Nav.Link>
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
                        <h6 className="text-success">Free shipping</h6>
                        <div className="d-flex flex-column mt-4">
                          <button
                            className="btn btn-success btn-sm"
                            type="button"
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-outline-danger btn-sm mt-2"
                            type="button"
                          >
                            Decline
                          </button>
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
