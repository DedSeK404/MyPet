import axios from "axios";
import {
  ACCEPT_DECLINE_OFFER,
  ADDOFFERSUCCESS,
  DELETEOFFERSUCCESS,
  GETALLOFFERSSUCCESS,
  GETALLOWNERS,
  GETUNIQUEOFFERS,
  OFFERFAILED,
  OFFERLOADING,
} from "../actiontypes/offertypes";
import { getallReviews } from "./reviewactions";
import { getallSitters } from "./usermanagementactions";

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

  //   const opts = {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   };
  //   console.log(`Bearer ${localStorage.getItem("token")}`);
  //   console.log(newPet);
  try {
    const res = await axios.post(baseURL + "/add", offerData);
    //console.log("res", res.data);
    alert(`${res.data.msg}`);
    dispatch({ type: ADDOFFERSUCCESS });
    dispatch(getallSitters());
    dispatch(getalloffers())
  } catch (error) {
    console.log(error);
    dispatch({
      type: OFFERFAILED,
      payload: error,
    });
  }
};

/**
 * @route get /offer/
 * @description get all offers
 * @access protected(authentifié+role:client)
 */

export const getalloffers = (status) => async (dispatch) => {
  dispatch({ type: OFFERLOADING });
  try {
    const { data } = await axios.get(
      `${baseURL}/${status ? "?status=" + status : ""}`
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
  //console.log(offerEdit);
  try {
    const { data } = await axios.patch(baseURL + "/edit", offerEdit);

    // alert(`${data.msg}`);
    dispatch({ type: ACCEPT_DECLINE_OFFER, payload: data.msg }); 
    dispatch(getallSitters());
    dispatch(getallReviews());
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

  try {
    const { data } = await axios.delete(baseURL + `/delete/${offerid}`);

    alert(`${data.msg}`);
    dispatch({ type: DELETEOFFERSUCCESS, payload: data.msg });
    dispatch(getalloffers());
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
export const getUniqueOffers = (sitterid) => async (dispatch) => {
  dispatch({ type: OFFERLOADING });

  try {
    const { data } = await axios.get(`${baseURL}/unique/${sitterid}`);
    dispatch({ type: GETUNIQUEOFFERS, payload: data });
  } catch (error) {
    dispatch({ type: OFFERFAILED, payload: error });
    console.log(error);
  }
};
