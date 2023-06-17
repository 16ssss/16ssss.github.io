import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { useEffect } from 'react';

const ResultAni = function ({
  type,
  isLoading,
  setIsEndAni,
  SetIsDownloadVideo,
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!isLoading) ref.current.play();
  }, [isLoading]);

  useEffect(() => {
    SetIsDownloadVideo(false);
  }, [SetIsDownloadVideo]);

  return (
    <>
      <Grid2
        container
        rowGap={2}
        position='absolute'
        top={0}
        sx={{ background: 'white' }}
        zIndex='9998'
      >
        <Grid2 xs={12}>
          <Typography
            variant='h2'
            color='primary'
            align='center'
            fontWeight='800'
          >
            뾰로롱~⭐️
          </Typography>
        </Grid2>
        <Grid2 xs={12}>
          <video
            playsInline={true}
            preload='auto'
            muted
            width='100%'
            onLoadedMetadata={() => {
              SetIsDownloadVideo(true);
            }}
            onEnded={() => setIsEndAni(true)}
            ref={ref}
            poster={process.env.PUBLIC_URL + `/characters-mp4/umi_thumb.png`}
          >
            <source
              src={
                process.env.PUBLIC_URL +
                `/characters-mp4/${type.toLowerCase()}_beta_white.mp4`
              }
              type={'video/mp4'}
            />
          </video>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ResultAni;
