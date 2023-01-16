import {handleActions} from 'redux-actions';

const initstate = {
    questions: [
        {
            "itemNo": 0,
            "details": ""
        }],
    answers: [
    ],
    result:""
};

export const SET_MBTI_QUESTION = 'mbti/SET_MBTI_QUESTION';
export const SET_MBTI_ANSWER = 'mbti/SET_MBTI_ANSWER';
export const SET_MBTI_RESULT = 'mbti/SET_MBTI_RESULT';

const mbtiReducer = handleActions(
    {
        [SET_MBTI_QUESTION]: (state, {payload}) => {
            state.questions = payload;
            return {...state};
        },
        [SET_MBTI_ANSWER]: (state, {payload}) => {
            const findIndexByItemNo = state.answers.findIndex((a) =>{
                return a.itemNo === payload.itemNo
            });
            let tmp = {...state};
            if (findIndexByItemNo != -1) {
                tmp.answers[findIndexByItemNo].answer = payload.answer;
            }else {
                tmp.answers = [...tmp.answers, {itemNo: payload.itemNo, answer: payload.answer}];
            }
            return {...tmp};
        },
        [SET_MBTI_RESULT]: (state, {payload}) => {
            state.result = payload;
            return {...state};
        }
    },
    initstate
);

export default mbtiReducer;