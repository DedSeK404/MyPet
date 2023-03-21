import axios from "axios";
import {
  ADDOFFERSUCCESS,
  GETALLOFFERSSUCCESS,
  GETALLOWNERS,
  OFFERFAILED,
  OFFERLOADING,
} from "../actiontypes/offertypes";
import {
  GETONEPETSSUCCESS,
  PETFAILED,
  PETLOADING,
} from "../actiontypes/pettypes";
import { getUser } from "./useraction";

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
    console.log("res", res.data);
    alert(`${res.data.msg}`);
    dispatch({ type: ADDOFFERSUCCESS });
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

export const getalloffers = () => async (dispatch) => {
  dispatch({ type: OFFERLOADING });
  try {
    const { data } = await axios.get(baseURL);
    dispatch({ type: GETALLOFFERSSUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: OFFERFAILED, payload: error });
    console.log(error);
  }
};

// /**
//  * @route get /offer/pet/:petID
//  * @description get one pet
//  * @access public
//  */
// export const getonepet = (petID) => async (dispatch) => {
//   dispatch({ type: OFFERLOADING });
//   try {
//     const { data } = await axios.get(`${baseURL}/pet/${petID}`);
//     console.log(data);
//     dispatch({ type: GETONEPETSSUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: OFFERLOADING, payload: error });
//   }
// };
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
