import { createTheme } from '@mui/material';
import { combineReducers } from '@reduxjs/toolkit';
import ReduxThunx from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import personalityTest from './modules/reducer/personalityTestReducer';

// import storage from 'redux-persist/lib/storage'; // 로컬 스토리지
import storage from 'redux-persist/lib/storage/session'; // 세션 스토리지

/**
 * MUI 세팅
 */
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        // body {
        //   background-color: rgb(228,228,228);
        // }
        video {
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
      }
      `,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {},
    },
  },
  typography: {
    fontFamily: '"NanumSquareRound", "Do Hyeon", "sans-serif"',
  },
  palette: {
    primary: {
      main: '#88c98e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ed5c7e',
      const: '#fff',
    },
    grey: {
      main: '#A9A9A9',
      contrastText: '#fff',
    },
    black: {
      main: '#000',
      contrastText: '#fff',
    },
  },
});

/**
 * redux store 세팅
 */
const rootReducer = combineReducers({
  personalityTest,
});
const persistConfig = {
  key: 'root', // localStorage key
  storage, // localStorage
  whitelist: ['personalityTest'], // target (reducer name)
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(ReduxThunx));
export const persistor = persistStore(store);

/**
 * 성격 유형 리스트
 */
export const TOTAL_QUESTION = 28;
export const typeList = [
  'ESTP',
  'ESTJ',
  'ESFP',
  'ESFJ',
  'ENFP',
  'ENFJ',
  'ENTP',
  'ENTJ',
  'ISTP',
  'ISTJ',
  'ISFP',
  'ISFJ',
  'INFP',
  'INFJ',
  'INTP',
  'INTJ',
];

export const personalitiesUrl = {
  INTJ: 'https://www.16personalities.com/ko/성격유형-intj',
  INTP: 'https://www.16personalities.com/ko/성격유형-intp',
  ENTJ: 'https://www.16personalities.com/ko/성격유형-entj',
  ENTP: 'https://www.16personalities.com/ko/성격유형-entp',
  INFJ: 'https://www.16personalities.com/ko/성격유형-infj',
  INFP: 'https://www.16personalities.com/ko/성격유형-infp',
  ENFJ: 'https://www.16personalities.com/ko/성격유형-enfj',
  ENFP: 'https://www.16personalities.com/ko/성격유형-enfp',
  ISTJ: 'https://www.16personalities.com/ko/성격유형-istj',
  ISFJ: 'https://www.16personalities.com/ko/성격유형-isfj',
  ESTJ: 'https://www.16personalities.com/ko/성격유형-estj',
  ESFJ: 'https://www.16personalities.com/ko/성격유형-esfj',
  ISTP: 'https://www.16personalities.com/ko/성격유형-istp',
  ISFP: 'https://www.16personalities.com/ko/성격유형-isfp',
  ESTP: 'https://www.16personalities.com/ko/성격유형-estp',
  ESFP: 'https://www.16personalities.com/ko/성격유형-esfp',
};

export const personalitiesHashtag = {
  ISFP: ['은화', '겸손', '여유'],
  ISFJ: ['현신', '인내심', '이타적'],
  ISTJ: ['책임감', '현실적', '보수적'],
  ISTP: ['과목', '분석적', '적응력'],
  INFP: ['성실', '개방적', '이해심'],
  INFJ: ['틍찰력', '공등체적'],
  INTJ: ['독립적', '분석적'],
  INTP: ['지적 호기심', '잠재력'],
  ESFP: ['호기심', '개방적', '사실적'],
  ESFJ: ['사교적', '친절함', '이타적'],
  ESTJ: ['체계적', '규칙적', '계획적'],
  ESTP: ['느긋함', '관용적', '문제 해결'],
  ENFP: ['상상력', '순발력', '활등적'],
  ENFJ: ['사교적', '예민함', '타인 존중'],
  ENTJ: ['철저함', '활등적', '통솔력'],
  ENTP: ['박학다식', '독창적', '도전적'],
};
