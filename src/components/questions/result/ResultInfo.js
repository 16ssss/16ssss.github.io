import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { useEffect, useLayoutEffect } from 'react';
import CharacterBar from './CharacterBar';

const ResultInfo = function ({ type, ratio }) {
  const theme = useTheme();
  let color = [];
  for (let i = 0; i < 4; i++) {
    color[i] =
      ratio[i] > 50 ? theme.palette.primary.main : theme.palette.secondary.main;
  }

  return (
    <>
      <Typography
        variant='h2'
        align='center'
      >
        <span
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
        </span>
      </Typography>
      <CharacterBar
        value={ratio[0] > 50 ? ratio[0] : 100 - ratio[0]}
        type={ratio[0] > 50 ? 'left' : 'right'}
        leftLabel='E'
        rightLabel='I'
      />
      <br />
      <CharacterBar
        value={ratio[1] > 50 ? ratio[1] : 100 - ratio[1]}
        type={ratio[1] > 50 ? 'left' : 'right'}
        leftLabel='S'
        rightLabel='N'
      />
      <br />
      <CharacterBar
        value={ratio[2] > 50 ? ratio[2] : 100 - ratio[2]}
        type={ratio[2] > 50 ? 'left' : 'right'}
        leftLabel='T'
        rightLabel='F'
      />
      <br />
      <CharacterBar
        value={ratio[3] > 50 ? ratio[3] : 100 - ratio[3]}
        type={ratio[3] > 50 ? 'left' : 'right'}
        leftLabel='J'
        rightLabel='P'
      />
    </>
  );
};

export default ResultInfo;
