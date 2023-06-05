import { Button, Typography, debounce } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { TOTAL_QUESTION } from '../../../config';

const QuestionsHeaderButtons = function ({ step, setStep }) {
  const navigate = useNavigate();
  const answers = useSelector((s) => s.personalityTest.answers);
  return (
    <Grid2
      container
      direction='row'
      justifyContent='space-between'
    >
      <Grid2 xs={1}>
        {step === 0 ? (
          <Button
            size='medium'
            onClick={() => {
              window.confirm('메인화면으로 돌아가시겠습니까?') && navigate(-1);
            }}
            variant='text'
          >
            HOME
          </Button>
        ) : (
          <Button
            sx={{ justifyContent: 'start', padding: 0, minWidth: 0 }}
            disabled={step === 0}
            onClick={debounce(() => {
              setStep(step - 1);
            }, 100)}
          >
            {
              <KeyboardArrowLeft
                fontSize='large'
                viewBox='8 0 24 24'
              />
            }
            {/*{<KeyboardArrowLeft fontSize="large"/>}*/}
          </Button>
        )}
      </Grid2>
      <Grid2 xs>
        <Typography
          color='primary'
          fontSize='x-large'
          align='center'
          whiteSpace='nowrap'
          alignContent='center'
        >
          {' '}
          U M I
        </Typography>
      </Grid2>
      <Grid2
        xs={1}
        display='flex'
        justifyContent='end'
      >
        {step + 1 < TOTAL_QUESTION ? (
          <Button
            sx={{ justifyContent: 'flex-end', padding: 0, minWidth: 0 }}
            disabled={answers[step].choice === '' || step === TOTAL_QUESTION}
            onClick={debounce(() => {
              setStep(step + 1);
            }, 100)}
          >
            {
              <KeyboardArrowRight
                fontSize='large'
                viewBox='0 0 7 24'
              />
            }
            {/*{<KeyboardArrowRight fontSize="large"/>}*/}
          </Button>
        ) : (
          <Button
            size='medium'
            onClick={() => {
              window.confirm('설문조사를 완료하시겠습니까?') &&
                navigate('/personality-test/comment');
            }}
            disabled={answers[step].choice === ''}
            variant='text'
          >
            완료
          </Button>
        )}
      </Grid2>
    </Grid2>
  );
};

export default QuestionsHeaderButtons;
