import {handleActions} from 'redux-actions';

const initstate = {
    questions: [
        {
            "itemNo": 0,
            "details": ""
        }],
    answers: [
    ]
};

export const SET_MBTI_QUESTION = 'mbti/SET_MBTI_QUESTION';
export const SET_MBTI_ANSWER = 'mbti/SET_MBTI_ANSWER';

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
        }
    },
    initstate
);

export default mbtiReducer;