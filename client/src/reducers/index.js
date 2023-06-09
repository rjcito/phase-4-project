import { combineReducers } from "redux";
import venuesReducer from "./venuesReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    usersReducer: usersReducer,
    venuesReducer: venuesReducer
})