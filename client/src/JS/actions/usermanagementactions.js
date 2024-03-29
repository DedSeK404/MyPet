import axios from "axios";
import {
  DELETEUSERSUCCESS,
  EDITUSER,
  GETALLSITTERSSUCCESS,
  RESETPASSWORD,
  SENDRESETEMAIL,
  USERFAILED,
  USERLOADING,
} from "../actiontypes/usermanagementtypes";
import { getUser } from "./useraction";
import { loginUser } from "./useraction";
import { CURRENTUSERFORREVIEW } from "../actiontypes/usertypes";

/**
 * @route patch /user/:iduser
 * @description update user
 * @access private
 */
const baseURL = "http://localhost:4500/user/"; 

export const editUser = ({editData, idUser,token},navigate) => async (dispatch) => {
  dispatch({ type: USERLOADING });
  
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  
  try {
    const { data } = await axios.patch(`${baseURL}${idUser}`,editData, opts); 
    
if (data.msg=="Account activated") {
  navigate("/login/Signin")
}

    dispatch({ type: EDITUSER, payload: data.msg });
    if (token) {
      dispatch(getUser())
    }
    
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
  }
 
  try {
    const { data } = await axios.get(
      `${baseURL}/${city ? "?city=" + city : available ? "?available=" + available : ""}`
      ,opts
    );
    
  
    dispatch({ type: GETALLSITTERSSUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
  }
}; 



/**
 * @route patch /user/available/:iduser
 * @description update user availablility
 * @access private
 */
export const editUserAvailability = ({editData, idUser,token}) => async (dispatch) => {
  dispatch({ type: USERLOADING });

  try {
    const { data } = await axios.patch(`${baseURL}available/${idUser}`, editData); 
    
    dispatch({ type: EDITUSER, payload: data.msg });
    if (token) {
      dispatch(getUser())
    }
    if (data.msg) {
      alert(data.msg);
    }
    
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route patch /user/password/:iduser
 * @description update password
 * @access private
 */
export const editPassword = (pass,iduser,oldpass) => async (dispatch) => { 
  dispatch({ type: USERLOADING });

  try {
    const { data } = await axios.patch(`${baseURL}password/${iduser}`, {password:pass,oldpassword:oldpass}); 
    
    dispatch({ type: EDITUSER, payload: data.msg });
    
    if (data.msg=="password changed successfully") {
      dispatch(getUser())
    }
     
   
    if (data.msg) {
      alert(data.msg);
    }
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
    console.log(error);
  }
};


/**
//  *@method GET /auth/userid
//  *@description  utilisateur authentifié
//  *@access private
//  */
export const getOnlyUser = (userid) => async (dispatch) => {
  dispatch({ type: USERLOADING });
  
  try {
    const { data } = await axios.get(
      `http://localhost:4500/auth/${userid}`
      
    ); 
    dispatch({ type: CURRENTUSERFORREVIEW, payload: data });
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
  }
}; 

/**
 * @route get /user/:userID
 * @description get user for resend activation code
 * @access protected
 */
export const getUserCode = (userID) => async (dispatch) => {
  dispatch({ type: USERLOADING });

  try {
    const { data } = await axios.get(`${baseURL}${userID}`);
    
    if (data.msg) {
      alert(data.msg);
    }
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route patch /user/password/reset/
 * @description reset password
 * @access private
 */
export const resetPassword = (resetData,setShow) => async (dispatch) => { 
  dispatch({ type: USERLOADING });

  try {
    const { data } = await axios.put(`${baseURL}password/reset/`,resetData); 
    console.log(data)
    dispatch({ type: RESETPASSWORD });
    
    if (data.msg=="password changed successfully") {
      setShow(false)
    }
   
    if (data.msg) {
      alert(data.msg);
    }
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route patch /user/reset/email
 * @description send reset email
 * @access private
 */
export const sendResetEmail = (resetEmailData,setButton) => async (dispatch) => { 
  dispatch({ type: USERLOADING });

  try {
    const { data } = await axios.patch(`${baseURL}reset/email`,resetEmailData); 
    console.log(data)
    dispatch({ type: SENDRESETEMAIL });
    if (data.msg!="No user found") {
      setButton(true)
    }
    
   
    if (data.msg) {
      alert(data.msg);
    }
  } catch (error) {
    dispatch({ type: USERFAILED, payload: error });
    console.log(error);
  }
};