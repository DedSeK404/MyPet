import React, { useState } from "react";
import activationPuppy from "../../Assets/activationPuppy.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser, getUserCode } from "../../JS/actions/usermanagementactions";
const ActivateAccount = () => {
  const navigate = useNavigate();
  const { userID } = useParams();
  const dispatch = useDispatch();
  const [activation, setactivation] = useState({});
  const handleChange = (e) => {
    setactivation({ code: e.target.value });
  };
const [sent, setsent] = useState(false)
  const handleSubmit = () => {
    dispatch(editUser({ editData: activation, idUser: userID }, navigate));
  };
  const handleResend = () => {
    dispatch(getUserCode(userID))
    setsent(true)
  };
  return (
    <div className="container py-4" style={{ minHeight: "100vh" }}>
      <Link to="/login/Signin">
        <Button variant="warning" style={{ width: "100%" }}>
          Go back to sign in page
        </Button>
      </Link>
      <div
        style={{
          background: "white",
          border: "1px lightGray solid",
          borderRadius: "10px",
        }}
      >
        <section>
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src={activationPuppy}
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <h4 style={{ color: "#A56856" }}>
                      Please check your emails for the activation code we sent
                      you
                    </h4>
                  </div>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">
                      Please enter the 6 digits code you recieved here
                    </p>
                  </div>
                  {/* Code input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Code"
                      onChange={handleChange}
                    />
                  </div>
                { !sent? <a
                    onClick={handleResend}
                    type="button"
                    style={{ color: "#A56856" }}
                  >
                    Didn't recieve a code? click here to resend it
                  </a>:<p style={{color:"gray",fontSize:"smaller"}}>Code sent, Check your emails for the new code</p>}
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-success btn-lg"
                      style={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                        width: "100%",
                      }}
                      onClick={handleSubmit}
                    >
                      Activate account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActivateAccount;
