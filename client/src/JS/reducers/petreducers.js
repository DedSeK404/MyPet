import {
  DELETEPETSUCCESS,
  EDITPETSUCCESS,
  GETALLPETSSUCCESS,
  GETONEPETSSUCCESS,
  PETFAILED,
  PETLOADING,
} from "../actiontypes/pettypes";

const initialState = {
  loading: true,
  pets: [],
  error: null,
  details: {},
};

export const petreducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case PETLOADING:
      return { ...state, loading: true };

    case GETALLPETSSUCCESS:
      return { ...state, pets: payload.pets, loading: false };

    case GETONEPETSSUCCESS:
      return { ...state, details: payload.pet, loading: false };

    case PETFAILED:
      return { ...state, error: payload, loading: false };

      case EDITPETSUCCESS:
        return { ...state, Alert: payload };

        case DELETEPETSUCCESS:
        return { ...state, Alert: payload };

    default:
      return state;
  }
};
