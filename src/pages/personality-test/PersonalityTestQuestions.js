import { useEffect, useMemo, useState } from 'react';
import QuestionsHeader from './questions/QuestionsHeader';
import QuestionsSlide from './questions/QuestionsSlide';
import { useDispatch, useSelector } from 'react-redux';
import QuestionsCard from './questions/QuestionsCard';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { CallGetMBTIQuestionAPI } from '../../utils/mbtiAPICalls';
import QuestionsDialog from './questions/QuestionsDialog';
import { TOTAL_QUESTION } from '../../config';
import { RESET_TEST } from '../../modules/reducer/personalityTestReducer';
import { useNavigate } from 'react-router-dom';

const PersonalityTestQuestions = function () {
  const [step, setStep] = useState(0);
  const test = useSelector((s) => s.personalityTest);
  const theme = useTheme();
  const width = useMediaQuery(theme.breakpoints.up('sm'))
    ? 552
    : window.innerWidth - 32;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const [init, setInit] = useState(false);
  useEffect(() => {
    if (init && test.isEndTest) {
      dispatch({ type: RESET_TEST });
      alert(`이미 종료된 테스트입니다. \n메인화면으로 이동하겠습니다.`);
      navigate('/personality-test');
    }
    setInit(true);
  }, [dispatch, init, isLoading, navigate, test.isEndTest]);

  useMemo(() => {
    const loadingVedio = new Image();
    loadingVedio.src = process.env.PUBLIC_URL + '/characters/loading.webm';
    const loadingVedioMp4 = new Image();
    loadingVedioMp4.src =
      process.env.PUBLIC_URL + `/characters-mp4/umi_beta_loading.mp4`;
  }, []);

  useEffect(() => {
    if (test.isDone || !test.testId)
      dispatch(CallGetMBTIQuestionAPI()).then((res) => {
        if (!res) setIsError(true);
        setIsLoading(false);
      });
    else {
      setIsLoading(false);
    }
  }, [dispatch, test.isDone, test.testId]);

  useEffect(() => {
    for (let i = 0; i < TOTAL_QUESTION; i++) {
      setStep(i);
      if (test.answers[i].choice === '') {
        break;
      }
    }
  }, [test]);

  if (isLoading) return <></>;
  if (isError) return <></>;

  return (
    <>
      <QuestionsDialog />
      <QuestionsHeader
        step={step}
        setStep={setStep}
      />
      <QuestionsSlide step={step}>
        {test.questions.map((q, i) => (
          <QuestionsCard
            key={`card${i}`}
            question={q}
            choice={test.answers[i]}
            width={width}
            index={i}
            unlike={test.answers[i].unlike}
          />
        ))}
      </QuestionsSlide>
    </>
  );
};

export default PersonalityTestQuestions;
