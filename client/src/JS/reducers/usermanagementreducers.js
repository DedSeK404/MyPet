import { EDITUSER } from "../actiontypes/usermanagementtypes";

const initialState = {
  authloading: true,
  Alert: "",
};

export const usermanagementreducers = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case EDITUSER:
      return { ...state, authloading: false, Alert: payload };

    default:
      return state;
  }
};
