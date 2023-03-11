import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../JS/actions/useraction";

const OwnerNavBar = () => {
  const dispatch = useDispatch();

  //const currentUser = useSelector((state) => state.userR.currentUser);
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      OwnerNavBar
      <button onClick={handleClick}>logout</button>
    </div>
  );
};

export default OwnerNavBar;
