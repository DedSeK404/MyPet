import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "./OwnerDashboard.css";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import ongoingLogo from "../../../../../Assets/ongoing_owner.svg";
import { getallpets } from "../../../../../JS/actions/petactions";
import OwnerD_Component from "./OwnerD_Component";
import { getallSitters } from "../../../../../JS/actions/usermanagementactions";
import Col from "react-bootstrap/esm/Col";
import { Button, Form, Row } from "react-bootstrap";
import Loading from "../../../../Loading";
import { getUniqueOffers } from "../../../../../JS/actions/offeractions";

const OwnerDashboard = ({ setStatus }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallSitters());
    dispatch(getallpets());
  }, []);
  const offers = useSelector((state) => state.offerR.uniqueOffers);
  const currentUser = useSelector((state) => state.userR.currentUser);
  const loading = useSelector((state) => state.offerR.loading);
 

  const cardVariants = {
    offscreen: {
      y: 190,
    },
    onscreen: {
      y: 50,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [check, setcheck] = useState("");
  const handleCheck = (e) => {
    setcheck(e.target.value);
  };
  setStatus(check);
  
  return (
    <AnimatePresence>
      
        <Row style={{display:"flex"}}>
       <Col sm={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Col sm={2}>
                <div style={{display:"flex", gap:"5px"}}>
                  <p>Filter</p> <p style={{ color: "green" }}>Jobs</p>
                </div>
              </Col>
              
            </div>
          </Col>
      <Col sm={8}>
                <Form.Select
                  as={Col}
                  sm="8"
                  controlId="validationCustom04"
                  name="city"
                  onChange={handleCheck}
                >
                  <option value="" >Please select an option</option>
                  <option value="">show all</option>
                  <option value="unknown">New</option>
                  <option value="active">Ongoing</option>
                  <option value="declined">Declined</option>
                  <option value="completed">Completed</option>
                </Form.Select>
              </Col>
              <Col sm={2}>
              <Button onClick={()=>dispatch(getUniqueOffers(currentUser._id))} variant="info">Refresh Jobs</Button>
              </Col> 
              </Row>
              
      {loading?<Loading/>:offers.length == 0 ? (
        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="vh-100"
          style={{ backgroundColor: "transparent" }}
        >
          <MDBContainer className="py-5 h-50">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="12" className="mb-4 mb-lg-0">
                <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                  <MDBRow className="g-0">
                    <MDBCardImage
                      src={ongoingLogo}
                      alt="Avatar"
                      style={{ width: "100vw", pointerEvents: "none" }}
                      fluid
                    />
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </motion.section>
      ) : (
        <>
          {showTopBtn && (
            <button
              type="button"
              className="icon-position icon-style"
              id="btn-back-to-top"
              onClick={goToTop}
            >
              <i class="fas fa-arrow-up"></i>
            </button>
          )}
         
          {offers ? (
            <>
              {offers.map((e) =>
                e.client == currentUser._id ? (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <motion.div variants={cardVariants}>
                      <OwnerD_Component key={e._id} data={e} />
                    </motion.div>
                  </motion.div>
                ) : (
                  ""
                )
              )}{" "}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default OwnerDashboard;
