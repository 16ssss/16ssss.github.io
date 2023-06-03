import { handleActions } from 'redux-actions';

const initState = {
  isDone: false,
  result: {
    mbti: '',
    ratio: {
      E: 0,
      S: 0,
      T: 0,
      J: 0,
    },
  },
};

export const SAVE_RESULT = 'result/SAVE_RESULT';
export const RESET_RESULT = 'result/RESET_RESULT';

export default handleActions(
  {
    [SAVE_RESULT]: (state, { payload }) => {
      state.result = { ...payload };
      state.isDone = true;
      return { ...state };
    },
    [RESET_RESULT]: () => initState,
  },
  initState
);
