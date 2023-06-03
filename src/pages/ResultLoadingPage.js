import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { useEffect } from 'react';
import { VideoFile } from '@mui/icons-material';
import { useLayoutEffect } from 'react';
const type = [
  'ESFJ',
  'ISFJ',
  'ESTJ',
  'ISTJ',
  'ESFP',
  'ISFP',
  'ENFJ',
  'INTP',
  'ESTP',
  'ISTP',
  'ENTP',
  'INFJ',
  'ENTJ',
  'INTJ',
  'ENFP',
  'INFP',
];
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ handleOnEnded }) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    type.map((t) => {
      const img = new Image();
      img.src = process.env.PUBLIC_URL + `/characters/${t}.png`;
      // preload라는 키로 함수를 지정하여 호출한다.
    });
  }, []);
  return (
    // <Stack spacing={1}>
    //     <Typography variant="h2" color="primary" align="center">
    //         Ur MBTI
    //     </Typography>
    //     <Skeleton variant="rectangular" width="auto" height="350px"/>
    //     <Skeleton variant="rounded" width="30%" height={27}/>
    //     <Typography variant="h3" align="center" pt={2}>
    //         ⭐️두 근 두 근⭐
    //     </Typography>
    //     <Skeleton variant="rounded" width="100%" height={500}/>
    // </Stack>
    <Grid2
      container
      rowGap={1}
    >
      <Grid2 xs={12}>
        <Typography
          variant='h2'
          color='primary'
          align='center'
        >
          Ur MBTI
        </Typography>
      </Grid2>
      <Grid2 xs={12}>
        <video
          autoPlay
          playsInline={true}
          preload='auto'
          muted
          width='100%'
          ref={ref}
          onEnded={handleOnEnded}
        >
          <source
            src={process.env.PUBLIC_URL + '/videos/loading5.webm'}
            type={'video/webm'}
          />
        </video>
      </Grid2>
    </Grid2>
  );
};
