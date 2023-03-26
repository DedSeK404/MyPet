import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import { Card, Col } from "react-bootstrap";
import "./Home/Owner_home_page/OwnerHome.css";

const Loading = () => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default Loading;
