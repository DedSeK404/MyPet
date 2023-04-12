import axios from "axios";
import {
  ADDROOMSUCCESS,
  CLEARMESSAGES,
  DELETEROOMSUCCESS,
  GETALLMESSAGES,
  PUSHMESSAGE,
  ROOMFAILED,
  ROOMLOADING,
} from "../actiontypes/roomtypes";

const baseURL = "http://localhost:4500/room";

/**
 * @route POST /room/add
 * @description post room
 * @access protected(authentifié+role:client)
 */

export const addRoom = (roomData) => async (dispatch) => {
  dispatch({
    type: ROOMLOADING,
  });

  try {
    const res = await axios.post(baseURL + "/add", roomData);

    dispatch({ type: ADDROOMSUCCESS, payload: res.data.msg });
    dispatch(getallMessages());
    if (res.data.msg) {
      alert(res.data.msg);
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: ROOMFAILED,
      payload: error,
    });
  }
};

/**
 * @route get /room/
 * @description get all messages
 * @access protected(authentifié)
 */

export const getallMessages = () => async (dispatch) => {
  dispatch({ type: ROOMLOADING });

  try {
    const { data } = await axios.get(baseURL);
    dispatch({ type: GETALLMESSAGES, payload: data });
  } catch (error) {
    dispatch({ type: ROOMFAILED, payload: error });
    console.log(error);
  }
};

/**
 * @route patch /room/push
 * @description push message
 * @access protected(authentifié)
 */
export const pushMessage = (MessageData) => async (dispatch) => {
  dispatch({
    type: ROOMLOADING,
  });
  console.log(MessageData);

  try {
    const { data } = await axios.patch(baseURL + "/push", MessageData);

    // alert(`${data.msg}`);
    dispatch({ type: PUSHMESSAGE });
  } catch (error) {
    dispatch({ type: ROOMFAILED, payload: error });
    console.log(error);
  }
};
/**
 * @route delete /room/delete/:roomID
 * @description delete  room
 * @access protected
 */
export const deleteRoom = (roomID) => async (dispatch) => {
  dispatch({
    type: ROOMLOADING,
  });

  try {
    const { data } = await axios.delete(baseURL + `/delete/${roomID}`);
    //console.log(petid);
    alert(`${data.msg}`);
    dispatch({ type: DELETEROOMSUCCESS, payload: data.msg });
    dispatch(getallMessages());
  } catch (error) {
    dispatch({ type: ROOMFAILED, payload: error });
    console.log(error);
  }
};
/**
 * @route patch /room/clear
 * @description clear messages
 * @access protected(authentifié)
 */
export const clearMessage = (roomID) => async (dispatch) => {
  dispatch({
    type: ROOMLOADING,
  });
  console.log(roomID);

  try {
    const res = await axios.patch(baseURL + `/clear/${roomID}`);
   // dispatch(getallMessages());
    dispatch({ type: CLEARMESSAGES });
    
  } catch (error) {
    dispatch({ type: ROOMFAILED, payload: error });
    console.log(error);
  }
};
