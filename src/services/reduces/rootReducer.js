import {combineReducers} from "redux";
import stepReducer from "./stepReducer";
import mbtiReducer from "./mbtiReducer";

export default combineReducers({
    stepReducer, mbtiReducer
});