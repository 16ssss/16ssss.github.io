import {handleActions} from "redux-actions";

const initState = 0;


export const NEXT_STEPPER = 'stepper/NEXT_STEPPER';
export const PRE_STEPPER = 'stepper/PRE_STEPPER';
export const RESET_STEPPER = 'stepper/RESET_STEPPER';

export const stepperReducer = handleActions(
    {
        [NEXT_STEPPER]: state => state + 1,
        [PRE_STEPPER]: state => state - 1,
        [RESET_STEPPER]: () => 0
    }, initState
)
