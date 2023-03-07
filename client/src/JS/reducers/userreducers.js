import { FAILED, LOADING, SIGNUPSUCCESS } from "../actiontypes/usertypes";

const initialState = {
  loading: true,
  error: null,
  input: [],
};

export const userReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    
    case SIGNUPSUCCESS:
      return { ...state, input: payload };

   
    case FAILED:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
