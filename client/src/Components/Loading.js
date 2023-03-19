import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Home/Owner_home_page/OwnerHome.css";

const Loading = () => {
  return (
    <div
      className="Home_Container"
      style={{ width: "100vw", minHeight: "110em" }}
    >
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Card.Img
              style={{ pointerEvents: "none", userSelect: "none" }}
              variant="top"
              src="https://svgshare.com/i/qrE.svg"
            />
          </Col>
          <Col sm={8}>
            {" "}
            <Tabs
              defaultActiveKey="Dashboard"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="Dashboard" title="Dashboard"></Tab>
              <Tab eventKey="Profile" title="Profile"></Tab>
              <Tab eventKey="Messages" title="Messages"></Tab>
              <Tab eventKey="My Pets" title="My Pets"></Tab>
              <Tab eventKey="Hire a Sitter" title="Hire a Sitter"></Tab>
            </Tabs>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
      <Col sm={8}>
        <Card style={{ width: "100%", height: "50%", marginLeft: "30%" }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Loading;
