import { Card, Fab, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Grid2 from '@mui/material/Unstable_Grid2';
import InnerStepper from '../../components/steppers/InnerStepper';
import QuestionCardV2 from '../../components/cards/QuestionCardV2';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import CommentCard from '../../components/cards/CommentCard';
import CompleteButtonSize1 from '../../components/buttons/CompleteButtonSize1';
import {
  CallGetMBTIQuestionAPI,
  CallPostMBTIQuestionAPI,
} from '../../apis/MbtiAPICalls';
import { useNavigate } from 'react-router-dom';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { TOGGLE_MBTI_TEST_PROFLEM } from '../../modules/MbtiReducer';
import { RESET_STEPPER } from '../../modules/StepperReducer';

export default () => {
  const mbti = useSelector((s) => s.mbtiReducer);
  const step = useSelector((s) => s.stepperReducer);
  const nodeRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (mbti.id === '') {
      dispatch(CallGetMBTIQuestionAPI());
      dispatch({ type: RESET_STEPPER });
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    nodeRef.current.style.transition = `0.5s ease-in-out`;
    nodeRef.current.style.transform = `translateX(-${100 * step}vw)`;
  }, [step]);

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100vw',
      }}
    >
      <Box
        ref={nodeRef}
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          width: '100vw',
        }}
      >
        {mbti.questions?.map((q, i) => {
          return (
            <Card
              key={`card${i}`}
              variant={'outlined'}
              sx={{
                flexShrink: '0',
                width: '100vw',
                boxSizing: 'border-box',
              }}
            >
              <Grid2
                container
                minHeight={400}
                alignContent={'start'}
              >
                <Grid2 xs={12}>
                  <InnerStepper
                    step={i}
                    choice={mbti.choices[i]?.choice}
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <QuestionCardV2
                    step={i}
                    choice={mbti.choices[i]?.choice}
                    question={q.question}
                    seq={q.seq}
                    type={mbti.questionType[i]}
                  />
                </Grid2>
              </Grid2>
              <Tooltip title='문항이 맘에안든다면 눌러주세요!'>
                <Fab
                  color={mbti.problem[i] === false ? 'gray' : 'primary'}
                  aria-label='add'
                  sx={{
                    marginTop: 2,
                    marginLeft: 3,
                    marginBottom: 2,
                  }}
                  onClick={() => {
                    dispatch({ type: TOGGLE_MBTI_TEST_PROFLEM, payload: i });
                  }}
                >
                  <ThumbDownIcon />
                </Fab>
              </Tooltip>
            </Card>
          );
        })}
        <Card
          variant={'outlined'}
          sx={{
            flexShrink: '0',
            width: '100vw',
            boxSizing: 'border-box',
          }}
        >
          <Grid2
            container
            minHeight={400}
            alignContent={'start'}
          >
            <Grid2 xs={12}>
              <InnerStepper step={28} />
            </Grid2>
            <Grid2 xs={12}>
              <CommentCard />
            </Grid2>
            <Grid2 xs={12}>
              <CompleteButtonSize1
                callApi={CallPostMBTIQuestionAPI}
                resultUrl='/result'
              />
            </Grid2>
          </Grid2>
        </Card>
      </Box>
    </Box>
  );
};
