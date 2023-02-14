import {combineReducers} from "redux";
import mbtiReducer from "./MbtiReducer";
import {stepperReducer} from "./StepperReducer";
import {slideDirectionReducer} from "./SlideDirectionReducer";

const rootReducer = combineReducers({
    mbtiReducer, stepperReducer, slideDirectionReducer
});

export default rootReducer;