import {SET_MBTI_QUESTION} from "../modules/MbtiReducer";
import testdata from "../testdatas/test.json"

const rootURL = 'http://localhost:8080';

export function CallGetMBTIQuestionAPI() {
    return async function GetMbtiQuestion(dispatch, getState) {
        // api get 통신 로직 구현 필요
        // const result = await fetch(rootURL + '/mbti-question')
        //     .then((res) => res.json());
        const result = testdata;
        return dispatch({type: SET_MBTI_QUESTION, payload: result.question})
    };
}

export function CallPostMBTIQuestionAPI() {
    return async function PostMbtiQuestion(dispatch, getState) {
        const {answers, result} = getState().mbtiReducer;
        console.log(answers);
        console.log(result);
        if (result == "") {
            return alert("MBTI 유형을 작성해주세요!");
        }
        if (answers.length != 28) {
            return alert("아직 응답을 완료하지 않았습니다.");
        }
        alert("응답이 완료되었습니다.\n설문에 응해주셔서 감사합니다.");
        return window.location.reload();
        // api post 통신 로직 구현 필요
    }
}