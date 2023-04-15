import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotFoundPic from "../../Assets/404.svg"

const NotFound = () => {
  const currentUser = useSelector((state) => state.userR.currentUser);
  
  return (
    <div>
      <div className="d-grid gap-2">
        <Link to={currentUser.role == "client" ? "/owner" : "/sitter"}>
          <Button variant="warning" style={{ width: "100%" }}>
            Go back
          </Button>
        </Link>
      </div>
      <img
        src={NotFoundPic}
        alt="0"
        style={{ width: "100vw" }}
      />
    </div>
  );
};

export default NotFound;
