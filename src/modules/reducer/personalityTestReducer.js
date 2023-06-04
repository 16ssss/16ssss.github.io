import { handleActions } from 'redux-actions';

const COUNT_QUESTIONS_NO = 28;

const createQuestion = () => ({
  seq: -1,
  type: '',
  question: '',
  rightImg: null,
  rightPhrase: '',
  leftImg: null,
  leftPhrase: '',
});

const createAnswer = () => ({
  seq: -1,
  choice: '',
  unlike: false,
  type: '',
});

const initState = {
  username: '',
  expectedType: null,
  testId: null,
  questions: Array.from({ length: COUNT_QUESTIONS_NO }, createQuestion),
  answers: Array.from({ length: COUNT_QUESTIONS_NO }, createAnswer),
  resultedType: null,
  resultRatio: [0, 0, 0, 0],
  comment: '',
  isEndTest: false,
};

export const SET_USERNAME = 'characterTest/SET_USERNAME';
export const SET_EXPECTED_TYPE = 'characterTest/SET_EXPECTED_TYPE';
export const INIT_QUESTIONS = 'characterTest/INIT_QUESTIONS';
export const SET_ANSWER = 'characterTest/SET_ANSWER';
export const SET_COMMENT = 'characterTest/SET_COMMENT';
export const TOGGLE_UNLIKE = 'characterTest/TOGGLE_UNLIKE';
export const SET_TEST_RESULT = 'characterTest/SET_TEST_RESULT';
export const RESET_TEST = 'characterTest/RESET_TEST';

const personalityTest = handleActions(
  {
    [SET_USERNAME]: (state, { payload }) => {
      return { ...state, username: payload };
    },
    [SET_EXPECTED_TYPE]: (state, { payload }) => {
      return { ...state, expectedType: payload };
    },
    [INIT_QUESTIONS]: (state, { payload }) => {
      return {
        ...state,
        testId: payload.id,
        questions: payload.questions.map((question, index) => ({
          ...state.questions[index],
          ...question,
        })),
        answers: payload.questions.map((question, index) => ({
          choice: '',
          unlike: false,
          seq: question.seq,
          type: payload.questions[index].type,
        })),
      };
    },
    [SET_ANSWER]: (state, { payload }) => {
      state.answers[payload.index].choice = payload.choice;
      return { ...state };
    },
    [SET_COMMENT]: (state, { payload }) => {
      return { ...state, comment: payload };
    },
    [TOGGLE_UNLIKE]: (state, { payload }) => {
      state.answers[payload].unlike = !state.answers[payload].unlike;
      return { ...state };
    },
    [SET_TEST_RESULT]: (state, { payload }) => {
      return {
        ...state,
        resultedType: payload.mbti,
        resultRatio: [
          payload.ratio.E,
          payload.ratio.S,
          payload.ratio.T,
          payload.ratio.J,
        ],
        isEndTest: true,
      };
    },
    [RESET_TEST]: () => {
      return { ...initState };
    },
  },
  initState
);

export default personalityTest;
