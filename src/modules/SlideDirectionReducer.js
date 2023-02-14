import {handleActions} from "redux-actions";

const initState = {
    slideDirection: "right",
    power: true
};


export const NEXT_SLIDE = 'slide/NEXT_SLIDE';
export const PRE_SLIDE = 'slide/PRE_SLIDE';
export const OFF_SLIDE = 'slide/OFF_SLIDE';
export const ON_SLIDE = 'slide/ON_SLIDE';

export const slideDirectionReducer = handleActions(
    {
        [NEXT_SLIDE]: (state) => {
            state.slideDirection = "right";
            return {...state};
        },
        [PRE_SLIDE]: (state) => {
            state.slideDirection = "left";
            return {...state};
        },
        [OFF_SLIDE]: (state) =>{
            state.power = false;
            return {...state};
        },
        [ON_SLIDE]: (state) =>{
            state.power = true;
            return {...state};
        }
    }, initState

)
