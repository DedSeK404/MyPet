import {
  ADDROOMSUCCESS,
  CLEARMESSAGES,
  DELETEROOMSUCCESS,
  GETALLMESSAGES,
  PUSHMESSAGE,
  ROOMFAILED,
  ROOMLOADING,
} from "../actiontypes/roomtypes";

const initialState = {
  loading: true,
  messages: [],
  error: null,
  Alert: null,
};

export const roomreducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ROOMLOADING:
      return { ...state, loading: true };

    case ADDROOMSUCCESS:
      return { ...state, loading: false, Alert: payload };

    case GETALLMESSAGES:
      return { ...state, messages: payload.messages, loading: false };

    case ROOMFAILED:
      return { ...state, error: payload, loading: false };

      case PUSHMESSAGE:
        return { ...state, Alert: payload };

        case DELETEROOMSUCCESS:
        return { ...state, Alert: payload };

        case CLEARMESSAGES:
        return { ...state, Alert: payload };

    default:
      return state;
  }
};
