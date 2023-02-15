import {handleActions} from 'redux-actions';
import mbtiCalc from "../Utils/MbtiCalc";

let choices
(choices = []).length = 28;
choices.fill({seq: -1, choice: ""});
let questionType;
(questionType = []).length = 28;
for(let i = 0; i<28; i++) questionType[i] = Math.round(Math.random());
let problem
(problem = []).length = 27;
problem.fill(false);
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
    questionType: questionType,
    problem: problem

};

export const SET_MBTI_ID = 'mbti/SET_MBTI_ID';
export const SET_MBTI_RESULT = 'mbti/SET_MBTI_RESULT';
export const SET_MBTI_QUESTION = 'mbti/SET_MBTI_QUESTION';
export const SET_MBTI_CHOICE = 'mbti/SET_MBTI_CHOICE';
export const SET_MBTI_USERNAME = 'mbti/SET_MBTI_USERNAME';
export const SET_MBTI_COMMENT = 'mbti/SET_MBTI_COMMENT';
export const SET_MBTI_TEST_RESULT = 'mbti/SET_MBTI_TEST_RESULT';
export const RESET_MBTI_TEST = 'mbti/RESET_MBTI_TEST'
export const RESET_MBTI_TEST_TYPE = 'mbti/RESET_MBTI_TEST_TYPE';
export const TOGGLE_MBTI_TEST_PROFLEM = 'mbti/TOGGLE_MBTI_TEST_PROFLEM';
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
        [RESET_MBTI_TEST_TYPE]: (state) => {
            let newQuestionType;
            (newQuestionType = []).length = 28;
            for(let i = 0; i<28; i++) newQuestionType[i] = Math.round(Math.random());
            state.questionType = newQuestionType;
            return {...state};
        },
        [TOGGLE_MBTI_TEST_PROFLEM]: (state, {payload}) => {
            state.problem[payload] = !state.problem[payload];
            return {...state};
        }
    },
    initState
);

export default mbtiReducer;