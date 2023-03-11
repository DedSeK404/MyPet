import { useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../JS/actions/useraction";
import "../Sign_in/Signin.css";

const SignIn = () => {
  const navigate=useNavigate()
  const [loginData, setLoginData]= useState({})
  const dispatch=useDispatch()

  const handleChange = (e)=>{
    
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

 const handleSubmit = (e)=>{
  e.preventDefault()
  dispatch(loginUser(loginData,navigate))
 }
  return (
    <div className="Signin_container">
    <Col className="form">
      <h2 style={{color:"#755A58"}}>Welcome Back</h2>
      <Form>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Stay logged in" />
        </Form.Group>
        <button className="Submit" type="submit" onClick={handleSubmit}>Submit</button>
      </Form>
    </Col>
    </div>
  );
};

export default SignIn;
