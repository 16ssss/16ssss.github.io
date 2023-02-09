import {combineReducers} from "redux";
import mbtiReducer from "./MbtiReducer";
import {stepperReducer} from "./StepperReducer";

const rootReducer = combineReducers({
    mbtiReducer, stepperReducer
});

export default rootReducer;