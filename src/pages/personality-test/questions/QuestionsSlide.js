import { useTheme } from '@emotion/react';
import { Box, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef } from 'react';

const QuestionsSlide = function ({ step, children }) {
  const ref = useRef(null);
  const theme = useTheme();
  const width = useMediaQuery(theme.breakpoints.up('sm'))
    ? 552
    : window.innerWidth - 32;
  useEffect(() => {
    window.scrollTo(0, 0);
    ref.current.style.transform = `translateX(-${width * step}px)`;
  }, [step, width]);
  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: `${width}px`,
      }}
    >
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          width: `${width}px`,
          transition: `${
            theme.transitions.duration.standard / 1000
          }s ease-in-out`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default QuestionsSlide;
