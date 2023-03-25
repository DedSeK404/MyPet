import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loading from "../../../Loading";
import OfferModal from "../../Offer/OfferModal";
import SitterProfileModal from "./SitterProfileModal";

const HireSitterCard = ({ data }) => {
  const [OfferData, setOfferData] = useState({});
  const loading = useSelector((state) => state.userM.loading);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setOfferData({});
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div className="col col-md-9 col-lg-7 col-xl-5">
      <div
        className="card"
        style={{
          borderRadius: 15,
          backgroundColor: loading ? (
            <Loading />
          ) : data.status == "available" ? (
            "#93e2bb"
          ) : loading ? (
            <Loading />
          ) : data.status == "busy" ? (
            "#FF6C6C"
          ) : loading ? (
            <Loading />
          ) : data.status == "unavailable" ? (
            "#D6D6D6"
          ) : (
            ""
          ),
          width: "390px",
        }}
      >
        <div className="card-body p-4 text-black">
          <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div style={{ display: "flex", gap: "10px" }}>
                <p className="small mb-0">
                  <i className="far fa-clock me-2" />
                  Status:
                </p>
                {loading ? (
                  <Loading />
                ) : data.status == "available" ? (
                  <p style={{ color: "green" }}>Available</p>
                ) : loading ? (
                  <Loading />
                ) : data.status == "unavailable" ? (
                  <p style={{ color: "grey" }}>Unavailable</p>
                ) : loading ? (
                  <Loading />
                ) : data.status == "busy" ? (
                  <p style={{ color: "red" }}>Busy</p>
                ) : (
                  ""
                )}
              </div>
              <p className="fw-bold mb-0">
                {loading ? <Loading /> : data.city}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="flex-shrink-0">
              <img
                src={loading ? <Loading /> : data.img}
                alt="Generic placeholder image"
                className="img-fluid rounded-circle border border-dark border-2"
                style={{ width: 70, height: 70 }}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <div className="d-flex flex-row align-items-center mb-2">
                <p className="mb-0 me-2">
                  {loading ? <Loading /> : data.first_name}
                </p>
                <ul
                  className="mb-0 list-unstyled d-flex flex-row"
                  style={{ color: "#1B7B2C" }}
                >
                  <li>
                    <i className="fas fa-star fa-xs" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-xs" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-xs" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-xs" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-xs" />
                  </li>
                </ul>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-rounded btn-sm"
                  data-mdb-ripple-color="dark"
                  onClick={() => setModalShow(true)}
                >
                  See profile
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-floating btn-sm"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fas fa-comment" />
                </button>
              </div>
            </div>
          </div>
          <hr />

          {loading ? (
            <Loading />
          ) : data.status == "available" ? (
            <Button
              type="button"
              variant="success"
              onClick={handleShow}
              style={{ width: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i class="fas fa-table"></i>
                <span>Send Offer</span>
              </div>
            </Button>
          ) : loading ? (
            <Loading />
          ) : data.status == "unavailable" ? (
            <Button
              type="button"
              variant="light"
              disabled
              style={{ width: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i class="fas fa-table"></i>
                <span>Send Offer</span>
              </div>
            </Button>
          ) : loading ? (
            <Loading />
          ) : data.status == "busy" ? (
            <Button
              type="button"
              variant="danger"
              disabled
              style={{ width: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i class="fas fa-table"></i>
                <span>Send Offer</span>
              </div>
            </Button>
          ) : (
            ""
          )}
          <OfferModal
            handleClose={handleClose}
            show={show}
            data={data}
            setOfferData={setOfferData}
            OfferData={OfferData}
          />
        </div>
      </div>

      <SitterProfileModal data={data} show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default HireSitterCard;
