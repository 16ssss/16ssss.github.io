import { useEffect, useState } from 'react';
import QuestionsHeader from './questions/QuestionsHeader';
import QuestionsSlide from './questions/QuestionsSlide';
import { useDispatch, useSelector } from 'react-redux';
import QuestionsCard from './questions/QuestionsCard';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { CallGetMBTIQuestionAPI } from '../../utils/mbtiAPICalls';
import QuestionsDialog from './questions/QuestionsDialog';
import { TOTAL_QUESTION } from '../../config';
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

  useEffect(() => {
    if (test.isDone || !test.testId)
      dispatch(CallGetMBTIQuestionAPI()).then((res) => {
        if (!res) setIsError(true);
        setIsLoading(false);
      });
    else {
      setIsLoading(false);
    }
  }, []);

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
