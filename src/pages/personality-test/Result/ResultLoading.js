import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';

const ResultLoading = ({
  isDataFetch,
  isDownloadImg,
  isDownloadVideo,
  setIsLoading,
}) => {
  const ref = useRef(null);

  const handleOnEnded = () => {
    setIsLoading(false);
  };

  return (
    <Grid2
      container
      rowGap={1}
      position='absolute'
      sx={{ background: 'white' }}
      zIndex='9999'
    >
      <Grid2 xs={12}>
        <Typography
          variant='h2'
          color='primary'
          align='center'
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
          loop={!(isDataFetch && isDownloadImg && isDownloadVideo)}
          ref={ref}
          onEnded={handleOnEnded}
          style={{
            WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
          }}
        >
          <source
            src={process.env.PUBLIC_URL + '/characters/loading.webm'}
            type={'video/webm'}
          />
        </video>
      </Grid2>
    </Grid2>
  );
};

export default ResultLoading;
