import { combineReducers } from "redux";
import { petreducers } from "./petreducers";
import { usermanagementreducers } from "./usermanagementreducers";
import { userReducers } from "./userreducers";

export const rootReducer = combineReducers({
  userR: userReducers,
  petR: petreducers,
  userM: usermanagementreducers,
});
