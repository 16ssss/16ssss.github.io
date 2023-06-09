import { Box, Container } from '@mui/material';
import { useEffect, useRef } from 'react';

const Test = function () {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.play();
  }, []);
  return (
    <Container
      maxWidth='sm'
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <video
        ref={ref}
        playsInline
        preload='auto'
        muted
        loop
        width='100%'
        height='100%'
        autoPlay
        style={{
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
          WebkitBackfaceVisibility: 'hidden',
          MozBackfaceVisibility: 'hidden',
        }}
      >
        <source
          src={process.env.PUBLIC_URL + `/tests/loading.mp4`}
          type={'video/mp4'}
        />
      </video>
    </Container>
  );
};

export default Test;
