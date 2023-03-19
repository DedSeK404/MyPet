import axios from "axios";
import {
  DELETEUSERSUCCESS,
  EDITUSER,
  GETALLSITTERSSUCCESS,
  USERFAILED,
  USERLOADING,
} from "../actiontypes/usermanagementtypes";
import { FAILED, LOADING } from "../actiontypes/usertypes";
import { getUser } from "./useraction";

/**
 * @route patch /user/:iduser
 * @description update user
 * @access private
 */
const baseURL = "http://localhost:4500/user/";

export const editUser = (editData, iduser) => async (dispatch) => {
  dispatch({ type: USERLOADING });
  try {
    const { data } = await axios.patch(`${baseURL}${iduser}`, editData);
    dispatch(getUser());
    dispatch({ type: EDITUSER, payload: data.msg });
    console.log(data.msg);
    if (data.msg) {
      alert(data.msg);
    }
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
    console.log(error);
    if (error.response.data.errors) {
      error.response.data.errors.forEach((el) => alert(el.msg));
    }
    if (error.response.data.msg) {
      alert(error.response.data.msg);
    }
  }
};

/**
 * @route delete /user/delete
 * @description delete  user
 * @access protected
 */
export const deleteUser = (userid, navigate) => async (dispatch) => {
  dispatch({
    type: USERLOADING,
  });

  try {
    const { data } = await axios.delete(baseURL + `delete/${userid}`);

    alert(`${data.msg}`);
    dispatch({ type: DELETEUSERSUCCESS, payload: data.msg });
    localStorage.removeItem("token");
    navigate("/login");
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route get /user/
 * @description get all sitters
 * @access protected
 */
export const getallSitters = (city, available) => async (dispatch) => {
  dispatch({ type: USERLOADING });
  try {
    const { data } = await axios.get(
      `${baseURL}/${
        city ? "?city=" + city : available ? "?available=" + available : ""
      }`
    );
  
    dispatch({ type: GETALLSITTERSSUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
  }
};