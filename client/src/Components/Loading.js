import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Home/Owner_home_page/OwnerHome.css";

const Loading = () => {
  return (
    <div>
      <Col sm={8}>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Loading;
