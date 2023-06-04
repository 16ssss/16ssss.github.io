import { Box, Typography } from '@mui/material';
import AnswersButtons from './AnswersButtons';
import QuestionUnlikeButton from './QuestionUnlikeButton';

const QuestionsCard = function ({ width, question, choice, index, unlike }) {
  return (
    <Box
      width={width}
      marginTop={3}
      sx={{ flexShrink: 0 }}
    >
      <Box boxSizing='border-box'>
        <Box
          minHeight={100}
          display='flex'
          alignItems='center'
          padding={2}
          position='relative'
        >
          <Typography
            align='center'
            fontSize={{ xs: 20, sm: 30 }}
            fontWeight='lighter'
            sx={{ width: '100%' }}
          >
            {question.question}
          </Typography>
          <Box
            position='absolute'
            bottom={-20}
            right={0}
          >
            <QuestionUnlikeButton
              index={index}
              value={unlike}
              seq={question.seq}
            />
          </Box>
        </Box>
        <Box>
          <AnswersButtons
            question={question}
            choice={choice}
            index={index}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionsCard;
