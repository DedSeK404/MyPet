import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const SitterD_Component = ({ data }) => {
  const pets = useSelector((state) => state.petR.pets);
  const owners = useSelector((state) => state.offerR.owners);
  //console.log(owners);
  // console.log(pets);
  // console.log(data);
  return (
    <Container fluid>
      <Row className="mb-3">
        <div className="card-header">
          {data.description}
        </div>
        <div  style={{ display: "flex" }} lg="12" fluid className="card-body">
          <Col fluid sm={4}>
            {pets.map((e) =>
              e._id == data.pet ? (
                //petCard
                <Card className="card mb-3" style={{ width: "8rem" }}>
                  <Card.Img variant="top" src={e.img} />
                  <p className="card-text">
                    <small className="text-muted">#{e.tag}</small>
                  </p>
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <p style={{ color: "#DD9679" }}>Breed</p>
                      <p>{e.breed}</p>
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <p style={{ color: "#DD9679" }}>Gender</p>
                      <p>{e.gender}</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              ) : (
                ""
              )
            )}
          </Col>

          <Col sm={4}>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Col>

          <Col sm={4}>
            {owners.map((e) =>
              e._id == data.client ? (
                //ownerCard
                <Card className="card mb-3" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={e.img} />
                  <p className="card-text">
                    <small className="text-muted">#{e.tag}</small>
                  </p>
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <p style={{ color: "#DD9679" }}>Breed</p>
                      <p>{e.breed}</p>
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <p style={{ color: "#DD9679" }}>Gender</p>
                      <p>{e.gender}</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              ) : (
                ""
              )
            )}
          </Col>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </Row>
    </Container>
  );
};

export default SitterD_Component;
