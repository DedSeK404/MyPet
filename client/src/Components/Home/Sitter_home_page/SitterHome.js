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
import { getUniqueOffers } from "../../../JS/actions/offeractions";
import { getUniqueReviews } from "../../../JS/actions/reviewactions";
import Logo from "../../../Assets/Logo.svg";
import Messages from "../../Chat/Messages";
import { getallMessages } from "../../../JS/actions/roomactions";
import { getOnlyUser } from "../../../JS/actions/usermanagementactions";

const SitterHome = ({ setUnavailable }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("") 
  const currentUser = useSelector((state) => state.userR.currentUser);
  
  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getUniqueReviews(currentUser._id))
    dispatch(getUniqueOffers(currentUser._id,status)); 
  }, [status]);

  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };
  const [key, setKey] = useState('Dashboard')
  if (key=="Dashboard") {
    dispatch(getOnlyUser(currentUser._id))  
    dispatch(getUniqueOffers(currentUser._id,status))
   }
   if (key=="Messages") {
    dispatch(getallMessages())
   }

  return (
    <div className="Home_Container" style={{ height: "max-content", minHeight:"100vh" }}>
      
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Card.Img
              style={{ pointerEvents: "none", userSelect: "none" }}
              variant="top"
              src={Logo}
            />
          </Col>
          <Col sm={8}>
            {" "}
            <Tabs
             id="controlled-tab-example"
             activeKey={key}
             onSelect={(k) => setKey(k)} 
             className="mb-3"
             fill
            >
              <Tab eventKey="Dashboard" title="Dashboard">
                <SitterDashboard setStatus={setStatus} />
              </Tab>
              <Tab eventKey="Profile" title="Profile">
                <SitterProfile setUnavailable={setUnavailable} />
              </Tab>
              <Tab eventKey="Messages" title="Messages">
              <Messages/>  
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
