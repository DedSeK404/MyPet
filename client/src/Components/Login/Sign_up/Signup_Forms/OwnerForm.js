import React, { useState } from "react";
import "../Signup_Forms/Signupforms.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { addUser } from "../../../../JS/actions/useraction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const OwnerForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [sigupData, setsigupData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    adress: "",
    city: "",
    birth_date: "",
    password: "",
    gender: "",
    phone:""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const passcode = Math.floor(100000 + Math.random() * 900000)
  const handleChange = (e) => {
    setsigupData({ ...sigupData, [e.target.name]: e.target.value, activated:false,code:passcode });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(addUser(sigupData, navigate));

    
  };
  const [icon, showIcon] = useState(false);
  const [password, showPassword] = useState(false);
  const handleShow = () => {
    showPassword(!password);
    showIcon(!icon);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label style={{ color: "#db8c6f" }}>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="first_name"
            placeholder="First name"
            defaultValue=""
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label style={{ color: "#db8c6f" }}>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
            onChange={handleChange}
            name="last_name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label style={{ color: "#db8c6f" }}>
            Select your Gender
          </Form.Label>
          <Form.Select
            as={Col}
            md="3"
            controlId="validationCustom04"
            onChange={handleChange}
            name="gender"
          >
            <option>Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label style={{ color: "#db8c6f" }}>Password</Form.Label>
          <div style={{ display: "flex", gap: "3%", alignItems: "center" }}>
            <Form.Control
              required
              type={password ? "text" : "password"}
              placeholder="Password"
              defaultValue=""
              onChange={handleChange}
              name="password"
            />
            <Form.Group as={Col} md="0" controlId="validationCustom02">
              <div
                onClick={handleShow}
                onSubmit={""}
                className={icon ? "hide_icon" : "show_icon"}
              ></div>
            </Form.Group>
          </div>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label style={{ color: "#db8c6f" }}>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleChange}
              name="email" 
            />
            <Form.Control.Feedback type="invalid">
              Please provile a valid email adress
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label style={{ color: "#db8c6f" }}>Phone</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+216</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Phone number"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleChange}
              name="phone"
            />
            <Form.Control.Feedback type="invalid">
              Please provile a valid phone number 
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label style={{ color: "#db8c6f" }}>Adress</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adress"
            required
            onChange={handleChange}
            name="adress"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid adress.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label style={{ color: "#db8c6f" }}>Select your City</Form.Label>
          <Form.Select
            as={Col}
            md="12"
            controlId="validationCustom04"
            onChange={handleChange}
            name="city"
          >
            <option>Select a city</option>
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
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label style={{ color: "#db8c6f" }}>
            Select your birth date
          </Form.Label>
          <Form.Control
            type="date"
            placeholder="BirthDate"
            required
            onChange={handleChange}
            name="birth_date"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Link style={{textDecoration: 'none', color:"#FFB694"}} to="/login/Signin">
        <div style={{paddingBottom:"10px", textDecoration:"none"}}>
      <a >Already have an account? Click to sign in</a>
      </div>
      </Link>
      <button className="submit_signup" type="submit" onClick={handleSumbit}>
        Create account
      </button>
    </Form>
  );
};

export default OwnerForm;
