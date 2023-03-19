import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../Owner_home_page/OwnerHome.css";
import { logout } from "../../../JS/actions/useraction";
import OwnerProfile from "./Owner_home_Components/OwnerProfile";
import PetsTab from "../Pets/PetsTab";
import { getallpets } from "../../../JS/actions/petactions";
import { useNavigate } from "react-router-dom";
import OwnerDashboard from "./Owner_home_Components/Owner_Dashboard/OwnerDashboard";
import HireSitter from "./HireSitter/HireSitter";
import { getallSitters } from "../../../JS/actions/usermanagementactions";


const OwnerHome = () => {
  const [city, setCity] = useState("")
  const [available, setAvailable] = useState("")
  console.log(available)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallpets());
    dispatch(getallSitters(city,available));
  }, [city,available]);

  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };

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
              <Tab eventKey="Dashboard" title="Dashboard">
                <OwnerDashboard />
              </Tab>
              <Tab eventKey="Profile" title="Profile">
                <OwnerProfile />
              </Tab>
              <Tab eventKey="Messages" title="Messages">
                <p>messages</p> 
              </Tab>
              <Tab eventKey="My Pets" title="My Pets">
                <PetsTab />
              </Tab>
              <Tab eventKey="Hire a Sitter" title="Hire a Sitter">
                <HireSitter setAvailable={setAvailable} setCity={setCity} />
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

export default OwnerHome;
