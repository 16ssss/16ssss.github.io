import {combineReducers} from "redux";
import stepReducer from "./stepReducer";
import mbtiReducer from "./mbtiReducer";
import hoverReducer from "./hoverReducer";

export default combineReducers({
    stepReducer, mbtiReducer, hoverReducer
});