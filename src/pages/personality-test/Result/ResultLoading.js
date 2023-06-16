import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ResultLoading = ({
  isDataFetch,
  isDownloadImg,
  isDownloadVideo,
  setIsLoading,
}) => {
  const ref = useRef(null);
  const [isDelay, setIsDelay] = useState(false);
  const handleOnEnded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsDelay(true);
    }, 2000);
  });

  return (
    <Grid2
      container
      rowGap={2}
      position='absolute'
      top={0}
      sx={{ background: 'white' }}
      zIndex='9999'
    >
      <Grid2 xs={12}>
        <Typography
          variant='h2'
          color='primary'
          align='center'
          fontWeight='800'
        >
          Loading...
        </Typography>
      </Grid2>
      <Grid2 xs={12}>
        <video
          autoPlay
          playsInline={true}
          preload='auto'
          muted
          width='100%'
          loop={!(isDataFetch && isDownloadImg && isDownloadVideo && isDelay)}
          ref={ref}
          onEnded={handleOnEnded}
          style={{
            WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
          }}
          poster={process.env.PUBLIC_URL + `/characters-mp4/umi_thumb.png`}
        >
          <source
            src={
              process.env.PUBLIC_URL + '/characters-mp4/umi_beta_loading.mp4'
            }
            type={'video/mp4'}
          />
          {/* <source
            src={process.env.PUBLIC_URL + '/characters/loading.webm'}
            type={'video/webm'}
          /> */}
        </video>
      </Grid2>
    </Grid2>
  );
};

export default ResultLoading;
