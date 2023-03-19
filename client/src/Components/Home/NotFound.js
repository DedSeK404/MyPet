import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
  const currentUser = useSelector((state) => state.userR.currentUser);
  //console.log(currentUser.role);
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
        src="https://i.ibb.co/dc7sw3X/404.png"
        alt="0"
        style={{ width: "100vw" }}
      />
    </div>
  );
};

export default NotFound;
