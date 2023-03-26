import {
  GETALLREVIEWS,
  GETUNIQUEREVIEWS,
  REVIEWFAILED,
  REVIEWLOADING,
} from "../actiontypes/reviewtypes";

const initialState = {
  loading: true,
  reviews: [],
  error: null,
  Alert: null,
  uniqueReviews:[]
};

export const reviewreducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case REVIEWLOADING:
      return { ...state, loading: true };

    case GETALLREVIEWS:
      return { ...state, reviews: payload.reviews, loading: false };

      case GETUNIQUEREVIEWS:
        return { ...state, uniqueReviews: payload.uniqueReviews, loading: false };

    case REVIEWFAILED:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
