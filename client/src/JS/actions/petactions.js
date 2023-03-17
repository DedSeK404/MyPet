import axios from "axios";
import {
  ADDPETSUCCESS,
  DELETEPETSUCCESS,
  EDITPETSUCCESS,
  FAILED,
  GETALLPETSSUCCESS,
  PETLOADING,
} from "../actiontypes/pettypes";

const baseURL = "http://localhost:4500/pet/";
/**
 * @route get /pet/
 * @description get all pets
 * @access protected(authentifié+role:client)
 */

export const getallpets = () => async (dispatch) => {
  dispatch({ type: PETLOADING });
  try {
    const { data } = await axios.get(baseURL);

    dispatch({ type: GETALLPETSSUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};
//   /**
//  * @route get /product/:idprod
//  * @description get one product
//  * @access public
//  */
//   export const getoneprod = (id) => async (dispatch) => {
//     dispatch({ type: PRODUCTLOADING });
//     try {
//       const { data } = await axios.get(`${baseURl}/${id}`);
//       console.log(data)
//       dispatch({ type: GETONEPRODCUTSSUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: FAILED, payload: error });
//     }
//   };
/**
 * @route POST /pet/add
 * @description add new pet
 * @access protected(authentifié+role:client)
 */

export const addpet = (newPet) => async (dispatch) => {
  dispatch({
    type: PETLOADING,
  });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  console.log(`Bearer ${localStorage.getItem("token")}`);
  console.log(newPet)
  try {
    const res = await axios.post(baseURL + "/add", newPet, opts);
    console.log("res", res.data);
    alert(`${res.data.msg}`);
    dispatch({ type: ADDPETSUCCESS });
    dispatch(getallpets());
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILED,
      payload: error,
    });
  }
};

/**
 * @route patch /pet/edit
 * @description update  pet
 * @access protected
 */
export const editpet = (editData) => async (dispatch) => {
  dispatch({
    type: PETLOADING,
  });

  try {
    const { data } = await axios.patch(baseURL + "edit", editData);
    console.log(editData);
    alert(`${data.msg}`);
    dispatch({ type: EDITPETSUCCESS, payload: data.msg });
    dispatch(getallpets());
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route delete /pet/delete/${petid}
 * @description delete  pet
 * @access protected
 */
export const deletepet = (petid) => async (dispatch) => {
  dispatch({
    type: PETLOADING,
  });
  console.log(petid);
  try {
    const { data } = await axios.delete(baseURL + `delete/${petid}`);
    console.log(petid);
    alert(`${data.msg}`);
    dispatch({ type: DELETEPETSUCCESS, payload: data.msg });
    dispatch(getallpets());
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
    console.log(error);
  }
};
