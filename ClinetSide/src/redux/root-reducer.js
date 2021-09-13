import { combineReducers } from "redux";
import usersReducers from "./reducer";

const rootReducers = combineReducers({
    data:usersReducers,
});

export default rootReducers;