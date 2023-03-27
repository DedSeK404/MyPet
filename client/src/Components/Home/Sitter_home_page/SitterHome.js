import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../Sitter_home_page/SitterHome.css";
import { logout } from "../../../JS/actions/useraction";
import SitterProfile from "./Sitter_home_Components/SitterProfile";
import { useNavigate } from "react-router-dom";
import SitterDashboard from "./Sitter_home_Components/Sitter_Dashboard/SitterDashboard";
import { getalloffers, getUniqueOffers } from "../../../JS/actions/offeractions";
import { getUniqueReviews } from "../../../JS/actions/reviewactions";

const SitterHome = ({ setUnavailable }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("") 
  const currentUser = useSelector((state) => state.userR.currentUser);
 
  useEffect(() => {
    window.scrollTo(0,0)
    //dispatch(getalloffers(status)); 
    dispatch(getUniqueReviews(currentUser._id))
    dispatch(getUniqueOffers(currentUser._id,status)); 
  }, [status]);

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
                <SitterDashboard setStatus={setStatus} />
              </Tab>
              <Tab eventKey="Profile" title="Profile">
                <SitterProfile setUnavailable={setUnavailable} />
              </Tab>
              {/* <Tab eventKey="Messages" title="Messages">
                <p>messages</p>
              </Tab> */}
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
