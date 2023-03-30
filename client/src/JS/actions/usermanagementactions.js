import axios from "axios";
import {
  DELETEUSERSUCCESS,
  EDITUSER,
  GETALLSITTERSSUCCESS,
  USERFAILED,
  USERLOADING,
} from "../actiontypes/usermanagementtypes";
import { getUser } from "./useraction";

/**
 * @route patch /user/:iduser
 * @description update user
 * @access private
 */
const baseURL = "http://localhost:4500/user/"; 

export const editUser = ({editData, idUser,token}) => async (dispatch) => {
  dispatch({ type: USERLOADING });
  console.log(editData)
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  
  try {
    const { data } = await axios.patch(`${baseURL}${idUser}`, editData,opts); 
    
    dispatch({ type: EDITUSER, payload: data.msg });
    if (token) {
      dispatch(getUser())
    }
    //console.log(data.msg);
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
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.delete(baseURL + `delete/${userid}`,opts);

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
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.get(
      `${baseURL}/${
        city ? "?city=" + city : available ? "?available=" + available : ""
      }`,opts
    );
  
    dispatch({ type: GETALLSITTERSSUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
  }
}; 
