import {SET_MBTI_QUESTION} from "../modules/MbtiReducer";
import testdata from "../testdatas/test.json"

const rootURL = 'http://localhost:8080';

export function CallGetMBTIQuestionAPI() {
    return async function GetMbtiQuestion(dispatch, getState) {
        // api get 통신 로직 구현 필요
        // const result = await fetch(rootURL + '/mbti-question')
        //     .then((res) => res.json());
        const result = testdata;
        return dispatch({type:SET_MBTI_QUESTION, payload:result.question})
    };
}

export function CallPostMBTIQuestionAPI(){
    return async function PostMbtiQuestion(dispatch, getState){
        const answer = getState().mbtiReducer.answers;
        console.log(answer);
        if (answer.length != 28) {
            return alert("아직 응답을 완료하지 않았습니다.");
        }
        alert("응답이 완료되었습니다.");
        // api post 통신 로직 구현 필요
    }
}