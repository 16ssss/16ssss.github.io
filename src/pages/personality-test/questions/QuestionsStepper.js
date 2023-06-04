import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import { TOTAL_QUESTION } from '../../../config';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '90%',
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // border: `solid ${theme.palette.primary.main}`
    border: 'none',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    height: '100%',
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.primary : '#308fe8',
    border: 'none',
  },
}));
const QuestionsStepper = function ({ step, total }) {
  return (
    <BorderLinearProgress
      variant='determinate'
      value={((step + 1) / total) * 100}
    />
  );
};

export default QuestionsStepper;
