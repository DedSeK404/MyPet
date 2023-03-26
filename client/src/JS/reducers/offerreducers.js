import {
  ACCEPT_DECLINE_OFFER,
  DELETEOFFERSUCCESS,
  GETALLOFFERSSUCCESS,
  GETALLOWNERS,
  GETUNIQUEOFFERS,
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
  Alert: null,
  uniqueOffers:[]
};

export const offerreducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case OFFERLOADING:
      return { ...state, loading: true };

    case GETALLOFFERSSUCCESS:
      return { ...state, offers: payload.offers, loading: false };

      case GETUNIQUEOFFERS:
        return { ...state, uniqueOffers: payload.uniqueOffers, loading: false };

    case GETONEPETSSUCCESS:
      return { ...state, pets: payload.pets, loading: false };

    case OFFERFAILED:
      return { ...state, error: payload, loading: false };

    case GETALLOWNERS:
      return { ...state, owners: payload.owners, loading: false };

    case ACCEPT_DECLINE_OFFER:
      return { ...state, Alert: payload };

      case DELETEOFFERSUCCESS:
        return { ...state, Alert: payload };

    default:
      return state;
  }
};
