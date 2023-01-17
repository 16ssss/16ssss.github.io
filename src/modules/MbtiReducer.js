import {handleActions} from 'redux-actions';

const initState = {
    id: "",
    username: "",
    questions: [
        {
            "seq": 0,
            "question": ""
        }],
    choices: [
    ],
    comment: "",
    result:""
};

export const SET_MBTI_ID = 'mbti/SET_MBTI_ID';
export const SET_MBTI_RESULT = 'mbti/SET_MBTI_RESULT';
export const SET_MBTI_QUESTION = 'mbti/SET_MBTI_QUESTION';
export const SET_MBTI_CHOICE = 'mbti/SET_MBTI_CHOICE';
export const SET_MBTI_USERNAME = 'mbti/SET_MBTI_USERNAME';
export const SET_MBTI_COMMENT = 'mbti/SET_MBTI_COMMENT';


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
            const findIndexBySeq = state.choices.findIndex((a) =>{
                return a.seq === payload.seq
            });
            let tmp = {...state};
            if (findIndexBySeq != -1) {
                tmp.choices[findIndexBySeq].choice = payload.choice;
            }else {
                tmp.choices = [...tmp.choices, {seq: payload.seq, choice: payload.choice}];
            }
            return {...tmp};
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
    },
    initState
);

export default mbtiReducer;