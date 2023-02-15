import {RESET_MBTI_TEST_TYPE, SET_MBTI_ID, SET_MBTI_QUESTION} from "../modules/MbtiReducer";
import testdata from "../testdatas/test.json"

// const rootURL = 'http://localhost:8080';
// const rootURL = 'http://52.78.175.191:8080/MBTI';
const rootURL = 'https://youmi.o-r.kr/MBTI';


export function CallGetMBTIQuestionAPI() {
    const requestURL = rootURL + '/questions';
    return async function GetMbtiQuestion(dispatch, getState) {
        // api get 통신 로직 구현 필요
        const result = await fetch(requestURL).then((res) => res.json());
        // dev용
        // const result = testdata;
        const {questions, id} = result.result
        dispatch({type: RESET_MBTI_TEST_TYPE});
        dispatch({type: SET_MBTI_ID, payload: id});
        return dispatch({type: SET_MBTI_QUESTION, payload: questions});
    };
}

export function CallPostMBTIQuestionAPI() {
    return async function PostMbtiQuestion(dispatch, getState) {
        const {choices, result, id, username, comment} = getState().mbtiReducer;
        const body = {
            expectedResult: result,
            items: choices,
            username: username,
            comment: comment
        }

        if (result === "") {
            return alert("MBTI 유형을 작성해주세요!");
        }
        const notAns = choices.filter(x => x.value === "").length;
        if (notAns > 0) {
            return alert("아직 응답을 완료하지 않았습니다.");
        }
        if (comment.length > 300) {
            return alert("추가 코멘트는 300자 보다 많이 작성할 수 없습니다.");
        }

        // 설문조사 응답이 정상
        const requestURL = rootURL + "/result" + "/" + id;
        const requestResult = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        }).then((res) => res.json());
        if (requestResult.resultCode === '0000') {
            alert("응답이 완료되었습니다.\n설문에 응해주셔서 감사합니다.");
            return true;
        }
        return false;
    }
}