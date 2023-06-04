import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import QuestionsHeaderButtons from './QuestionsHeaderButtons';
import { TOTAL_QUESTION } from '../../../config';
import QuestionsStepper from './QuestionsStepper';

const QuestionsHeader = function ({ step, setStep }) {
  const total = TOTAL_QUESTION;
  return (
    <Grid2 container>
      <Grid2 xs={12}>
        <QuestionsHeaderButtons
          step={step}
          setStep={setStep}
        />
      </Grid2>
      <Grid2 xs={12}>
        <Grid2 container>
          <Grid2
            xs={2}
            sm={1.5}
          >
            <Typography
              align='left'
              color='primary'
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
      </Grid2>
    </Grid2>
  );
};

export default QuestionsHeader;
