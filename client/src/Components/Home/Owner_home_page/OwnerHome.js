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
import { getalloffers, getallOwners, getUniqueOffers } from "../../../JS/actions/offeractions";
import { getallReviews } from "../../../JS/actions/reviewactions";
import Logo from "../../../Assets/Logo.svg"
import Messages from "../../Chat/Messages";

 
const OwnerHome = () => {
  const currentUser = useSelector((state) => state.userR.currentUser);
  const [city, setCity] = useState("")
  const [available, setAvailable] = useState("")
  //console.log(available)
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [status, setStatus] = useState("") 
  useEffect(() => {
    window.scrollTo(0,0)
    //dispatch(getalloffers(status))
    dispatch(getallpets());
    dispatch(getallSitters(city,available));
    dispatch(getallReviews())
    dispatch(getallOwners())
    dispatch(getUniqueOffers(currentUser._id,status)); 
  }, [city,available,status]);
//console.log(status)
  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };
  const [key, setKey] = useState('Dashboard')
   
  return (
    <div
      className="Home_Container"
      
      style={{ height: "fit-content", marginBottom:"15%", minHeight:"100vh"  }}
    >
      
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
                <OwnerDashboard setStatus={setStatus} />
              </Tab>
              <Tab eventKey="Profile" title="Profile">
                <OwnerProfile />
              </Tab>
              <Tab eventKey="Messages" title="Messages">
                <Messages /> 
              </Tab>
              <Tab eventKey="My Pets" title="My Pets">
                <PetsTab />
              </Tab>
              <Tab eventKey="Hire a Sitter" title="Hire a Sitter">
                <HireSitter  setKey={setKey} setAvailable={setAvailable} setCity={setCity} />
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
