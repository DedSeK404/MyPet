import React, { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardImage,
} from "mdb-react-ui-kit";

import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import SitterD_Component from "./SitterD_Component";
import { getallpets } from "../../../../../JS/actions/petactions";
import { getallOwners } from "../../../../../JS/actions/offeractions";


const SitterDashboard = () => {
  const offers = useSelector((state) => state.offerR.offers);
  const currentUser = useSelector((state) => state.userR.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallOwners());
    dispatch(getallpets());
  }, []);
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
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
  return (
    <AnimatePresence>
      <>
        {offers ? (
          <>
            {offers.map((e) =>
              e.sitter == currentUser._id ? (
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.div variants={cardVariants}>
                    <SitterD_Component key={e._id} data={e} />
                  </motion.div>
                </motion.div>
              ) : (
                ""
              )
            )}{" "}
          </>
        ) : (
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
                        src="https://svgshare.com/i/rGf.svg"
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
        )}
      </>
    </AnimatePresence>
  );
};

export default SitterDashboard;
