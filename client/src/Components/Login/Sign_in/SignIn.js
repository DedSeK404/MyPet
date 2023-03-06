import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Sign_in/Signin.css";

const SignIn = () => {
  return (
    <div className="Signin_container">
    <Col className="form">
      <h2 style={{color:"#755A58"}}>Welcome Back</h2>
      <Form>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Stay logged in" />
        </Form.Group>
        <button className="Submit" type="submit">Submit</button>
      </Form>
    </Col>
    </div>
  );
};

export default SignIn;
