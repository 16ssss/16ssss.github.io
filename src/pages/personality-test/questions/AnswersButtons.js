import { useTheme } from '@emotion/react';
import {
  Chip,
  FormControl,
  RadioGroup,
  Stack,
  useMediaQuery,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import AnswerRadioButton from './AnswerRadioButton';

const AnswersButtons = function ({
  question: { leftPhrase, rightPhrase, seq },
  choice: { choice, unlike },
  index,
}) {
  const [hover, setHover] = useState('');
  const theme = useTheme();
  const fontSize = useMediaQuery(theme.breakpoints.up('sm')) ? 15 : 13;

  return (
    <Grid2
      container
      marginTop={3}
      rowGap={1.5}
    >
      <Grid2 xs={12}>
        <Chip
          label={leftPhrase}
          color='primary'
          variant={choice < 0 || hover === 'left' ? 'filled' : 'outlined'}
          size='medium'
          sx={{
            fontSize: hover === 'left' ? fontSize + 5 : fontSize,
            transition: `font-size ${
              theme.transitions.duration.standard / 1000
            }s`,
          }}
        />
      </Grid2>
      <FormControl fullWidth>
        {/*<FormLabel id="mbti-radio">응답</FormLabel>*/}
        <RadioGroup
          row
          // aria-labelledby="demo-row-radio-buttons-group-label"
          name='umi-test-radio-group'
        >
          <Stack
            width='100%'
            flexDirection='row'
            justifyContent='space-between'
          >
            <AnswerRadioButton
              seq={seq}
              group={index}
              value='-3'
              checked={choice === '-3'}
              size={40}
              color='primary'
              setHover={setHover}
            />
            <AnswerRadioButton
              seq={seq}
              group={index}
              value='-1'
              checked={choice === '-1'}
              size={30}
              color='primary'
              setHover={setHover}
            />
            <AnswerRadioButton
              seq={seq}
              group={index}
              value='0'
              checked={choice === '0'}
              size={25}
              color='grey'
              setHover={setHover}
            />
            <AnswerRadioButton
              seq={seq}
              group={index}
              value='1'
              checked={choice === '1'}
              size={30}
              color='secondary'
              setHover={setHover}
            />
            <AnswerRadioButton
              seq={seq}
              group={index}
              value='3'
              checked={choice === '3'}
              size={40}
              color='secondary'
              setHover={setHover}
            />
          </Stack>
        </RadioGroup>
      </FormControl>
      <Grid2
        xs={12}
        display='flex'
        justifyContent='flex-end'
      >
        <Chip
          label={rightPhrase}
          color='secondary'
          variant={choice > 0 || hover === 'right' ? 'filled' : 'outlined'}
          size='medium'
          sx={{
            fontSize: hover === 'right' ? fontSize + 5 : fontSize,
            transition: `all ${theme.transitions.duration.standard / 1000}s`,
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default AnswersButtons;
