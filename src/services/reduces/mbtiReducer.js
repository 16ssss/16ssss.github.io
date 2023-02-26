import {handleActions} from 'redux-actions';
import mbtiCalc from "../../utils/MbtiCalc";

let choices
(choices = []).length = 28;
choices.fill({seq:-1, choice:""})
const initState = {
    id: "",
    username: "",
    questions: [
        {
            seq: 0,
            question: "",
            type: ""
        }],
    choices: choices,
    comment: "",
    result:"",
    testResult: "",
    isDone:false,
};

export const SET_MBTI_ID = 'mbti/SET_MBTI_ID';
export const SET_MBTI_RESULT = 'mbti/SET_MBTI_RESULT';
export const SET_MBTI_QUESTION = 'mbti/SET_MBTI_QUESTION';
export const SET_MBTI_CHOICE = 'mbti/SET_MBTI_CHOICE';
export const SET_MBTI_USERNAME = 'mbti/SET_MBTI_USERNAME';
export const SET_MBTI_COMMENT = 'mbti/SET_MBTI_COMMENT';
export const SET_MBTI_TEST_RESULT = 'mbti/SET_MBTI_TEST_RESULT';
export const RESET_MBTI_TEST = 'mbti/RESET_MBTI_TEST'
export const DONE_MBTI_TEST = 'mbti/DONE_MBTI_TEST';
const mbtiReducer = handleActions(
    {
        [SET_MBTI_ID]: (state, {payload}) => {
            state.id = payload;
            return {...state};
        },
        [SET_MBTI_QUESTION]: (state, {payload}) => {
            state.questions = payload;
            return {...state};
        },
        [SET_MBTI_CHOICE]: (state, {payload}) => {
            state.choices[payload.index] = {seq: payload.seq, choice: payload.choice};
            return {...state};
        },
        [SET_MBTI_RESULT]: (state, {payload}) => {
            state.result = payload;
            return {...state};
        },
        [SET_MBTI_USERNAME]: (state, {payload}) => {
            state.username = payload;
            return {...state};
        },
        [SET_MBTI_COMMENT]: (state, {payload}) => {
            state.comment = payload;
            return {...state};
        },
        [SET_MBTI_TEST_RESULT]: (state) => {
            // 테스트 응답 한것을 토대로 결과를 도출
            const result = mbtiCalc(state);
            state.testResult = result;
            return {...state};
        },
        [RESET_MBTI_TEST]: () => {
            return {...initState};
        },
        [DONE_MBTI_TEST]: (state) => {
            state.isDone = true;
            return {...state};
        }
    },
    initState
);

export default mbtiReducer;