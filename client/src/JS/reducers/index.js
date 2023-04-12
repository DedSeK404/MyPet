import { combineReducers } from "redux";
import { offerreducers } from "./offerreducers";
import { petreducers } from "./petreducers";
import { reviewreducers } from "./reviewreducer";
import { usermanagementreducers } from "./usermanagementreducers";
import { userReducers } from "./userreducers";
import { roomreducers } from "./roomreducer";

export const rootReducer = combineReducers({
  userR: userReducers,
  petR: petreducers,
  userM: usermanagementreducers,
  offerR: offerreducers,
  reviewR: reviewreducers,
  roomR: roomreducers,
});
