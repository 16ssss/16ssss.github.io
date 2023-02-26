import {handleActions} from "redux-actions";

const initState = "";


export const HANDLE_ON_MOUSE_OVER = "hover/HANDLE_ON_MOUSE_OVER";

export default handleActions(
    {
        [HANDLE_ON_MOUSE_OVER]: (state, {payload}) => {
            state = payload;
            return state;
        }
    }, initState
);

