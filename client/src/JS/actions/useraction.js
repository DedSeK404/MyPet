import axios from "axios";
import { FAILED, LOADING, SIGNUPSUCCESS } from "../actiontypes/usertypes";

/**
 *@method POST /auth/signup
 *@description register a new user
 *@access public
 */
export const addUser = (newUserData, navigate) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const res = await axios.post("/auth/signup", {...newUserData});
    console.log("res", res.data);
    alert(`${res.data.msg}`);
    dispatch({ type: SIGNUPSUCCESS });

    //navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILED,
      payload: error,
    });
  }
};
