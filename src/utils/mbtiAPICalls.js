import {
  INIT_QUESTIONS,
  SET_TEST_RESULT,
} from '../modules/reducer/personalityTestReducer';

const rootURL = 'https://umi-mbti.kro.kr:8080/MBTI';

export function CallGetMBTIQuestionAPI() {
  const requestURL = rootURL + '/questions';
  // window.localStorage.clear();
  return async function GetMbtiQuestion(dispatch, getState) {
    const response = await fetch(requestURL).then((res) => res);
    // 성공시
    if (response.status === 200) {
      const body = await response.json();
      if (body.resultCode === '0000') {
        dispatch({ type: INIT_QUESTIONS, payload: body.result });
        return body.result;
      } else {
        return false;
      }
    }
    // 실패시
    return false;
  };
}

export function CallPostMBTIQuestionAPI() {
  return async function PostMbtiQuestion(dispatch, getState) {
    const { answers, expectedType, testId, username, comment } =
      await getState().personalityTest;
    const unlikeList = await answers.filter((a) => a.unlike === true);
    const questionEvaluations = await unlikeList.map((a) => ({
      like: a.unlike,
      questionSeq: a.seq,
    }));
    const choices = await answers.map((a, i) => ({
      choice: a.seq,
      itemType: a.type,
      seq: a.seq,
    }));
    const body = {
      expectedResult: expectedType,
      items: choices,
      username: username,
      comment: comment,
      questionEvaluations: questionEvaluations,
    };
    // console.log(JSON.stringify(body));
    // console.log(body);
    const requestURL = rootURL + '/result/' + testId;
    const requestResult = await fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
    // console.log(requestResult);
    if (requestResult.resultCode === '0000') {
      await dispatch({ type: SET_TEST_RESULT, payload: requestResult.result });
      return true;
    }
    return false;
  };
}
