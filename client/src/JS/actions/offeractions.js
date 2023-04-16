import axios from "axios";
import {
  ACCEPT_DECLINE_OFFER,
  ADDOFFERSUCCESS,
  DELETEOFFERSUCCESS,
  GETALLOFFERSSUCCESS,
  GETALLOWNERS,
  GETUNIQUEOFFERS,
  OFFERCOMPLETED,
  OFFERFAILED,
  OFFERLOADING,
} from "../actiontypes/offertypes";
import { getallReviews } from "./reviewactions";
import { editUserAvailability, getallSitters } from "./usermanagementactions";

const baseURL = "http://localhost:4500/offer";

/**
 * @route POST /offer/add
 * @description add new offer
 * @access protected(authentifié+role:client)
 */

export const addOffer = (offerData) => async (dispatch) => {
  dispatch({
    type: OFFERLOADING,
  });

  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  try {
    const res = await axios.post(baseURL + "/add", offerData, opts);
    if (res.data.msg=="Sitter is currently unavailable for work") {
      
      
       alert(`${res.data.msg}`);
       dispatch({ type: OFFERFAILED });
      return dispatch(getallSitters());
    }
    alert(`${res.data.msg}`);
    dispatch({ type: ADDOFFERSUCCESS });
    dispatch(getallSitters());
    dispatch(getalloffers());
  } catch (error) {
    dispatch({ type: OFFERFAILED, payload: error });
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
 * @route get /offer/
 * @description get all offers
 * @access protected(authentifié+role:client)
 */

export const getalloffers = (status) => async (dispatch) => {
  dispatch({ type: OFFERLOADING });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.get(
      `${baseURL}/${status ? "?status=" + status : ""}`,
      opts
    );
    dispatch({ type: GETALLOFFERSSUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: OFFERFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route get offer/user/
 * @description get all owners
 * @access protected
 */
export const getallOwners = () => async (dispatch) => {
  dispatch({ type: OFFERLOADING });

  try {
    const { data } = await axios.get(baseURL + "/user");

    dispatch({ type: GETALLOWNERS, payload: data });
  } catch (error) {
    dispatch({ type: OFFERFAILED, payload: error });
  }
};

/**
 * @route patch /offer/edit
 * @description update  offer
 * @access protected
 */
export const editoffer = (offerEdit) => async (dispatch) => {
  dispatch({
    type: OFFERLOADING,
  });

  
  const {idUser}=offerEdit
  const {CurrentUser}=offerEdit
  const {status}=offerEdit
  const {iduser}=offerEdit


  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.patch(baseURL + "/edit", offerEdit, opts);

    
if (data.msg=="Offer accepted") {
  dispatch(editUserAvailability({ editData: { status: "busy" }, idUser: idUser,token:true })); 
  return dispatch(getUniqueOffers(CurrentUser))
}

    
    if (data.msg=="The Sitter already accepted or declined the offer") { 
      alert(`${data.msg}`)
      
      return dispatch({ type: OFFERFAILED })
    }
    if (data.msg=="The Sitter deleted the offer") { 
      alert(`${data.msg}`)
      dispatch({ type: OFFERFAILED })
      
      return dispatch(getUniqueOffers(CurrentUser));
    }

    if (status=="completed") { 
      
      dispatch({ type: OFFERCOMPLETED});
      dispatch(
        editUserAvailability({ editData: { status: "available" }, idUser: iduser })
      );
      dispatch(getallSitters());
      return   dispatch(getUniqueOffers(CurrentUser));
    }

    dispatch({ type: ACCEPT_DECLINE_OFFER, payload: data.msg });
    dispatch(getallSitters());
    dispatch(getallReviews());
    dispatch(getUniqueOffers(CurrentUser));
  } catch (error) {
    dispatch({ type: OFFERFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route delete /offer/delete 
 * @description delete  offer
 * @access protected
 */
export const deleteoffer = (offerid) => async (dispatch) => {
  dispatch({
    type: OFFERLOADING,
  });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.delete(baseURL + `/delete/${offerid}`, opts);

    alert(`${data.msg}`);
    dispatch({ type: DELETEOFFERSUCCESS, payload: data.msg });
  } catch (error) {
    dispatch({ type: OFFERFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route get /offer/unique/:sitterid
 * @description get unique reviews
 * @access protected(authentifié+role:client)
 */
export const getUniqueOffers = (sitterid, status) => async (dispatch) => {
  dispatch({ type: OFFERLOADING });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.get(
      `${baseURL}/unique/${sitterid}/${status ? "?status=" + status : ""}`,
      opts
    );
    dispatch({ type: GETUNIQUEOFFERS, payload: data });
  } catch (error) {
    dispatch({ type: OFFERFAILED, payload: error });
    console.log(error);
  }
};
