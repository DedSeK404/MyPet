import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const SitterForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-2">
      <Form.Group as={Col} md="6" controlId="validationCustom01">
        <Form.Label style={{color:"#db8c6f"}}>First name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="First name"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="validationCustom02">
        <Form.Label style={{color:"#db8c6f"}}>Last name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Last name"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="12" controlId="validationCustomUsername">
        <Form.Label style={{color:"#db8c6f"}}>Email</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Email"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provile a valid email adress
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="mb-4">
      <Form.Group as={Col} md="12" controlId="validationCustom03">
        <Form.Label style={{color:"#db8c6f"}}>Adress</Form.Label>
        <Form.Control type="text" placeholder="Adress" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid adress.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label style={{color:"#db8c6f"}}>Select your City</Form.Label>
        <Form.Select as={Col} md="12" controlId="validationCustom04">
          <option value="1">Ariana</option>
          <option value="2">Béja</option>
          <option value="3">Ben Arous</option>
          <option value="4">Bizerte</option>
          <option value="5">Gabès</option>
          <option value="6">Gafsa</option>
          <option value="7">Jendouba</option>
          <option value="8">Kairouan</option>
          <option value="9">Kasserine</option>
          <option value="10">Kébili</option>
          <option value="11">Kef</option>
          <option value="12">Mahdia</option>
          <option value="13">Manouba</option>
          <option value="14">Médenine</option>
          <option value="15">Monastir</option>
          <option value="16">Nabeul</option>
          <option value="17">Sfax</option>
          <option value="18">Sidi Bouzid</option>
          <option value="19">Siliana</option>
          <option value="20">Sousse</option>
          <option value="21">Tataouine</option>
          <option value="22">Tozeur</option>
          <option value="23">Tunis</option>
          <option value="24">Zaghouan</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md="12" controlId="validationCustom05">
        <Form.Label style={{color:"#db8c6f"}}>Select your birth date</Form.Label>
        <Form.Control type="date" placeholder="BirthDate" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid date.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Form.Group className="mb-4">
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
      />
    </Form.Group>
    <button className="submit_signup" type="submit">Create account</button>
  </Form>
  );
};

export default SitterForm;
