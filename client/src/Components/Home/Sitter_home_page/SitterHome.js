import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../Sitter_home_page/SitterHome.css";
import { logout } from "../../../JS/actions/useraction";
import SitterProfile from "./Sitter_home_Components/SitterProfile";
import { useNavigate } from "react-router-dom";
import SitterDashboard from "./Sitter_home_Components/Sitter_Dashboard/SitterDashboard";
import { getalloffers } from "../../../JS/actions/offeractions";

const SitterHome = ({ setUnavailable }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getalloffers());
  }, []);

  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="Home_Container" style={{ height: "max-content", minHeight:"100vh" }}>
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
                <SitterDashboard  />
              </Tab>
              <Tab eventKey="Profile" title="Profile">
                <SitterProfile setUnavailable={setUnavailable} />
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
