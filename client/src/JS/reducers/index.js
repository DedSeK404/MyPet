import { combineReducers } from "redux";
import { userReducers } from "./userreducers";

export const rootReducer = combineReducers({
  userR: userReducers
});
