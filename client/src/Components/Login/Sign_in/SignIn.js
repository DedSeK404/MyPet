import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../JS/actions/useraction";
import "../Sign_in/Signin.css";
import Modal from "react-bootstrap/Modal";
import { resetPassword, sendResetEmail } from "../../../JS/actions/usermanagementactions";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData, navigate));
  };

  const [show, setShow] = useState(false);
  const [button, setButton] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const handleSubmitEmail = () => {
    const passcode = Math.floor(100000 + Math.random() * 900000);
    dispatch(sendResetEmail({email, reset_code:passcode},setButton))
  };

  const [icon, showIcon] = useState(false);
  const [newicon, showNewIcon] = useState(false);
  const [oldpassword, showOldPassword] = useState(false);
  const [newpassword, showNewPassword] = useState(false);
  const handleShowOldPass = () => {
    showOldPassword(!oldpassword);
    showIcon(!icon);
  };
  const handleShowNewPass = () => {
    showNewPassword(!newpassword);
    showNewIcon(!newicon);
  };
  const [newPass, setnewPass] = useState({});
  const handleChangePass = (e) => {
    setnewPass({ ...newPass, [e.target.name]: e.target.value });
  };
  
  const handleReset = () => {
    dispatch(resetPassword(newPass,setShow));
  };
  return (
    <div className="Signin_container">
      <Col className="form">
        <h2 style={{ color: "#755A58" }}>Welcome Back</h2>
        <Form>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/login/Signup"
          >
            <div style={{ paddingBottom: "10px", textDecoration: "none" }}>
              <a>Don't have an account? Click to create one</a>
            </div>
          </Link>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button className="Submit" type="submit" onClick={handleSubmit}>
              <i class="fas fa-paw"></i> Submit
            </Button>
            <a onClick={handleShow} type="button">
              Reset your password
            </a>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header style={{ background: "white" }} closeButton>
              <Modal.Title>Reset password</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: "white" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Type your email here</Form.Label>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Button onClick={handleSubmitEmail} variant="primary" disabled={button?true:false}>
                    {button?"email sent":"Submit"}
                  </Button>
                </div>
                <Form.Text className="text-muted">
                  You will recieve a reset code, please copy and paste it in the
                  form below
                </Form.Text>
              </Form.Group>

              <Form.Label>Type reset code here</Form.Label>

              <Form.Control
                onChange={handleChangePass}
                name="reset_password"
                type="text"
                placeholder="Enter code"
              />
              <hr />
              <Form.Label>New password</Form.Label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Form.Control
                  type={newpassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="new_password"
                  onChange={handleChangePass}
                />
                <div
                  onClick={handleShowNewPass}
                  onSubmit={""}
                  className={newicon ? "hide_icon" : "show_icon"}
                ></div>
              </div>
              <Form.Label>Re-enter New password</Form.Label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Form.Control
                  type={oldpassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="confirm_password"
                  onChange={handleChangePass}
                />
                <div
                  onClick={handleShowOldPass}
                  onSubmit={""}
                  className={icon ? "hide_icon" : "show_icon"}
                ></div>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ background: "white" }}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleReset}>
                Reset password
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Col>
    </div>
  );
};

export default SignIn;
