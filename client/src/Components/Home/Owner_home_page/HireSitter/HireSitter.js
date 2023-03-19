import React, { useState } from "react";
import HireSitterCard from "./HireSitterCard";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useSelector } from "react-redux";
import { Col, Form } from "react-bootstrap";

const HireSitter = ({ setCity, setAvailable }) => {

  const [check, setcheck] = useState("available");
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const handleCheck = () => {
    
    if (check == "") {
      setcheck("available");
    } else {
      setcheck("");
    }
    setAvailable(check);
  };
  const sitterData = useSelector((state) => state.userM.sitters);
  const handleSubmit = (e) => {
    setCity(e.target.value);
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          borderTop: "1px #D2D2D2 solid",
          borderRight: "1px #D2D2D2 solid",
          borderLeft: "1px #D2D2D2 solid",
          borderBottom: "2px #DD9679 solid",
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "30px",
          gap: "40px",
          marginTop: "50px",
          minHeight: "auto",
          paddingBottom: "10%",
        }}
      >
        <Col
          sm={12}
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "3%",
            alignItems: "center",
          }}
        >
          <Col
            style={{
              display: "flex",
              gap: "10px",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ marginTop: "10px" }}>Filter Sitters by City:</p>
            <Form.Select
              as={Col}
              md="12"
              controlId="validationCustom04"
              name="city"
              onChange={handleSubmit}
              style={{ width: "45%" }}
            >
              <option >Select a city</option>
              <option value="">Show all</option>
              <option value="Ariana">Ariana</option>
              <option value="Béja">Béja</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gabès">Gabès</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Kébili">Kébili</option>
              <option value="Kef">Kef</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Manouba">Manouba</option>
              <option value="Médenine">Médenine</option>
              <option value="Monastir">Monastir</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Sfax">Sfax</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Siliana">Siliana</option>
              <option value="Sousse">Sousse</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Tunis">Tunis</option>
              <option value="Zaghouan">Zaghouan</option>
            </Form.Select>
          </Col>
          <Col>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"                
                onClick={handleCheck}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Show <span style={{ color: "green" }}>available</span> only
              </label>
            </div>

            
          </Col>
        </Col>
        {sitterData.map((e) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={cardVariants}>
              <HireSitterCard key={e._id} data={e} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default HireSitter;
