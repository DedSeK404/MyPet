import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../Sitter_home_page/SitterHome.css";
import { logout } from "../../../JS/actions/useraction";
import SitterProfile from "./Sitter_home_Components/SitterProfile";

const SitterHome = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className="Home_Container" style={{ height: "100vh" }}>
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
              <Tab eventKey="Dashboard" title="Dashboard">
                <p>dashboard</p>
              </Tab>
              <Tab eventKey="Profile" title="Profile">
                <SitterProfile />
              </Tab>
              <Tab eventKey="Messages" title="Messages">
                <p>messages</p>
              </Tab>
            </Tabs>
          </Col>
          <Col sm={2}>
            <Button className="logout" onClick={handleClick}>
              logout
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SitterHome;
