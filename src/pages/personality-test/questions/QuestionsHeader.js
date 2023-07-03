import { Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import QuestionsHeaderButtons from './QuestionsHeaderButtons';
import { TOTAL_QUESTION } from '../../../config';
import QuestionsStepper from './QuestionsStepper';

const QuestionsHeader = function ({ step, setStep }) {
  const total = TOTAL_QUESTION;
  const arrowSize = { fontSize: 50 };
  const buttonLabelSize = { fontSize: 'large' };

  return (
    <Stack
      height='100%'
      flexDirection={'column'}
    >
      <QuestionsHeaderButtons
        step={step}
        setStep={setStep}
        arrowSize={arrowSize}
        buttonLabelSize={buttonLabelSize}
      />
      <Grid2 container>
        <Grid2 xs='auto'>
          <Typography
            align='left'
            color='primary'
            fontSize={buttonLabelSize}
            fontWeight='500'
          >
            <span> {` ${step + 1}`}</span>
            <span> / {total}</span>
          </Typography>
        </Grid2>
        <Grid2
          xs
          marginLeft={1}
        >
          <QuestionsStepper
            step={step}
            total={total}
          />
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default QuestionsHeader;
