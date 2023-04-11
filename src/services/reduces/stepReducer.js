import {handleActions} from "redux-actions";

const initState = {
    now: 0,
    total: 28
};


export const NEXT_STEP = 'step/NEXT_STEP';
export const PRE_STEP = 'step/PRE_STEP';
export const RESET_STEP = 'step/RESET_STEP';

export default handleActions(
    {
        [NEXT_STEP]: state => {
            state.now = state.now < state.total ? state.now + 1 : state.now;
            return {...state};
        },
        [PRE_STEP]: state => {
            state.now = state.now > 0 ? state.now - 1 : state.now;

            return {...state};
        },
        [RESET_STEP]: () => initState
    }, initState
);

