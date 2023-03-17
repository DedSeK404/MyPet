import { combineReducers } from "redux";
import { petreducers } from "./petreducers";
import { userReducers } from "./userreducers";

export const rootReducer = combineReducers({
  userR: userReducers,
  petR: petreducers,
});
