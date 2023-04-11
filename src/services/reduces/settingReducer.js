import {handleActions} from "redux-actions";

const initState = {
    imageType: "1" // 1:개 or 2:고양이
};


export const TOGGLE_IMAGE_TYPE = 'setting/TOGGLE_IMAGE_TYPE';
export const RESET_IMAGE_TYPE = 'setting/RESET_IMAGE_TYPE';

export default handleActions(
    {
        [TOGGLE_IMAGE_TYPE]: state => {
            state.imageType = state.imageType === "1" ? "2" : "1";
            return {...state};
        },
        [RESET_IMAGE_TYPE]: state => {
            state.imageType = "1";
            return {...state};
        }
        }, initState
);

