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
 * @route POST /offer/add
 * @description add new offer
 * @access protected(authentifié+role:client)
 */

export const addReview = (reviewData) => async (dispatch) => {
  dispatch({
    type: REVIEWLOADING,
  });
  //   const opts = {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //   };
  //   console.log(`Bearer ${localStorage.getItem("token")}`);
  //   console.log(newPet);
  try {
    const res = await axios.post(baseURL + "/add", reviewData);
    //console.log("res", res.data);
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
 * @route get /offer/
 * @description get all offers
 * @access protected(authentifié+role:client)
 */

export const getallReviews = (status) => async (dispatch) => {
  dispatch({ type: REVIEWLOADING });
  try {
    const { data } = await axios.get(baseURL);
    dispatch({ type: GETALLREVIEWS, payload: data });
  } catch (error) {
    dispatch({ type: REVIEWFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route get /review/unique/:sitterid
 * @description get unique reviews
 * @access protected(authentifié+role:client)
 */
export const getUniqueReviews = (sitterid) => async (dispatch) => {
  dispatch({ type: REVIEWLOADING });

  try {
    const { data } = await axios.get(`${baseURL}/unique/${sitterid}`);
    dispatch({ type: GETUNIQUEREVIEWS, payload: data });
  } catch (error) {
    dispatch({ type: REVIEWFAILED, payload: error });
    console.log(error);
  }
};
