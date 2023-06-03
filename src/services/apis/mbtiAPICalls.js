import {
  RESET_MBTI_TEST,
  SET_MBTI_ID,
  SET_MBTI_QUESTION,
} from '../reduces/mbtiReducer';
import { RESET_STEP } from '../reduces/stepReducer';
import { SAVE_RESULT } from '../reduces/testResultReducer';

// const rootURL = 'https://localhost:8080/MBTI';
const rootURL = 'https://umi-mbti.kro.kr:8080/MBTI';
// const rootURL = 'https://d495-220-117-21-80.ngrok-free.app/MBTI';
// const rootURL = 'http://52.78.175.191:8080/MBTI';
// const rootURL = 'https://youmi.o-r.kr/MBTI';

export function CallGetMBTIQuestionAPI() {
  const requestURL = rootURL + '/questions';
  window.localStorage.clear();
  return async function GetMbtiQuestion(dispatch, getState) {
    // api get 통신 로직 구현 필요
    const result = await fetch(requestURL).then((res) => res.json());
    // dev용
    // const result = testdata;
    const { questions, id } = result.result;
    // console.log(questions);
    // console.log(id);
    await dispatch({ type: RESET_MBTI_TEST });
    await dispatch({ type: RESET_STEP });
    await dispatch({ type: SET_MBTI_ID, payload: id });
    await dispatch({ type: SET_MBTI_QUESTION, payload: questions });
  };
}

export function CallPostMBTIQuestionAPI() {
  return async function PostMbtiQuestion(dispatch, getState) {
    const { choices, result, id, username, comment, unlikes } =
      getState().mbtiReducer;
    const questionEvaluations = unlikes.filter((s) => s.questionSeq !== -1);
    const body = {
      expectedResult: result,
      items: choices,
      username: username,
      comment: comment,
      questionEvaluations: questionEvaluations,
    };
    // console.log(JSON.stringify(body));

    // 설문조사 응답이 정상
    const requestURL = rootURL + '/result' + '/' + id;
    const requestResult = await fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
    // console.log(requestResult.result);
    if (requestResult.resultCode === '0000') {
      dispatch({ type: SAVE_RESULT, payload: requestResult.result });
      return true;
    }
    return false;
  };
}
