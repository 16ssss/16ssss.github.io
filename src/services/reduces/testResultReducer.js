import {handleActions} from "redux-actions";

const initState = {
    isDone: false,

};


export const SAVE_RESULT = 'result/SAVE_RESULT';
export const RESET_RESULT = 'result/RESET_RESULT';

export default handleActions(
    {
        [SAVE_RESULT]: (state, {payload}) => {
            state.isDone = true;
            state.result = payload.result;
            return {...payload};
        },
        [RESET_RESULT]: () => initState
    }, initState
);

