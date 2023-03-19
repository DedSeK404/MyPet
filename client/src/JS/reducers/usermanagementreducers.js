import {
  EDITUSER,
  GETALLSITTERSSUCCESS,
} from "../actiontypes/usermanagementtypes";

const initialState = {
  loading: true,
  Alert: "",
  sitters: [],
};

export const usermanagementreducers = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case EDITUSER:
      return { ...state, loading: false, Alert: payload };

    case GETALLSITTERSSUCCESS:
      return { ...state, sitters: payload.sitters, loading: false };

    default:
      return state;
  }
};
