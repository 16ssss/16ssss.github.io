import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function ResultAni({
  type,
  loading,
  setEndAni,
  setDownloadVideo,
}) {
  const ref = useRef();
  useEffect(() => {
    if (!loading) ref.current.play();
  }, [loading]);

  return (
    <>
      <Grid2
        container
        rowGap={1}
        position='absolute'
        sx={{ background: 'white' }}
        zIndex='9998'
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
            playsInline={true}
            preload='auto'
            muted
            width='100%'
            onLoadedData={() => {
              console.log('비디오 로딩 끝');
              setDownloadVideo(true);
            }}
            onEnded={() => setEndAni(true)}
            ref={ref}
          >
            <source
              src={process.env.PUBLIC_URL + `/characters/${type}.webm`}
              type={'video/webm'}
            />
          </video>
        </Grid2>
      </Grid2>
    </>
  );
}
