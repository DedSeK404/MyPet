import axios from "axios";
import {
  ADDREVIEWSUCCESS,
  GETALLREVIEWS,
  GETUNIQUEREVIEWS,
  REVIEWFAILED,
  REVIEWLOADING,
} from "../actiontypes/reviewtypes";
import { getallpets } from "./petactions";
import { getallSitters } from "./usermanagementactions";

const baseURL = "http://localhost:4500/review";

/**
 * @route POST /review/add
 * @description post review
 * @access protected(authentifié+role:client)
 */

export const addReview = (reviewData) => async (dispatch) => {
  dispatch({
    type: REVIEWLOADING,
  });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const res = await axios.post(baseURL + "/add", reviewData,opts);
  
    alert(`${res.data.msg}`);
    dispatch({ type: ADDREVIEWSUCCESS });
    dispatch(getallSitters()); 
    dispatch(getallpets());
  } catch (error) {
    console.log(error);
    dispatch({
      type: REVIEWFAILED,
      payload: error,
    });
  }
};

/**
 * @route get /review/
 * @description get all reviews
 * @access protected(authentifié)
 */

export const getallReviews = () => async (dispatch) => {
  dispatch({ type: REVIEWLOADING });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.get(baseURL,opts);
    dispatch({ type: GETALLREVIEWS, payload: data });
  } catch (error) {
    dispatch({ type: REVIEWFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route get /review/unique/:sitterid
 * @description get unique reviews
 * @access protected(authentifié)
 */
export const getUniqueReviews = (sitterid) => async (dispatch) => {
  dispatch({ type: REVIEWLOADING });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.get(`${baseURL}/unique/${sitterid}`,opts);
    dispatch({ type: GETUNIQUEREVIEWS, payload: data });
  } catch (error) {
    dispatch({ type: REVIEWFAILED, payload: error });
    console.log(error);
  }
};
