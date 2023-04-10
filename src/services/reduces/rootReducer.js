import {combineReducers} from "redux";
import stepReducer from "./stepReducer";
import mbtiReducer from "./mbtiReducer";
import hoverReducer from "./hoverReducer";
import settingReducer from "./settingReducer";

export default combineReducers({
    stepReducer, mbtiReducer, hoverReducer, settingReducer
});