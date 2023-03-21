import {
  GETALLOFFERSSUCCESS,
  GETALLOWNERS,
  OFFERFAILED,
  OFFERLOADING,
} from "../actiontypes/offertypes";
import { GETONEPETSSUCCESS } from "../actiontypes/pettypes";

const initialState = {
  loading: true,
  offers: [],
  error: null,
  pets: [],
  owners: [],
};

export const offerreducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case OFFERLOADING:
      return { ...state, loading: true };

    case GETALLOFFERSSUCCESS:
      return { ...state, offers: payload.offers, loading: false };

    case GETONEPETSSUCCESS:
      return { ...state, pets: payload.pets, loading: false };

    case OFFERFAILED:
      return { ...state, error: payload, loading: false };

      case GETALLOWNERS:
      return { ...state, owners: payload.owners, loading: false }; 

    default:
      return state;
  }
};
