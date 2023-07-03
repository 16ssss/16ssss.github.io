import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';

const PersonalityType = function ({ type, ratio }) {
  const theme = useTheme();
  let color = [];
  for (let i = 0; i < 4; i++) {
    color[i] =
      ratio[i] > 50 ? theme.palette.primary.main : theme.palette.secondary.main;
  }
  return (
    <Typography
      variant='h2'
      align='center'
      fontWeight='500'
      sx={{ fontSize: '16px' }}
    >
      감성에 젖은 게으르지만 <br /> 빠른{' '}
      <span style={{ fontSize: '24px' }}>레몬냥이</span>
      {/* <span
        style={{
          color: color[0],
        }}
      >
        {type[0]}
      </span>{' '}
      <span
        style={{
          color: color[1],
        }}
      >
        {type[1]}
      </span>{' '}
      <span
        style={{
          color: color[2],
        }}
      >
        {type[2]}
      </span>{' '}
      <span
        style={{
          color: color[3],
        }}
      >
        {type[3]}
      </span> */}
    </Typography>
  );
};

export default PersonalityType;
