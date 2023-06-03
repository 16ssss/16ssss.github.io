import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// const types = [
//   'ESFJ',
//   'ISFJ',
//   'ESTJ',
//   'ISTJ',
//   'ESFP',
//   'ISFP',
//   'ENFJ',
//   'INTP',
//   'ESTP',
//   'ISTP',
//   'ENTP',
//   'INFJ',
//   'ENTJ',
//   'INTJ',
//   'ENFP',
//   'INFP',
// ];

const ResultLoading = ({
  dataPatch,
  downloadImg,
  downloadvideo,
  setEndLoading,
  // type,
}) => {
  // console.log(!dataPatch || !downloadImg || !downloadvideo);
  const ref = useRef(null);

  const handleOnEnded = () => {
    setEndLoading(true);
  };

  // useEffect(() => {
  //   console.log(dataPatch);
  // if (dataPatch) {
  //   const img = new Image();
  //   img.src = process.env.PUBLIC_URL + `/characters/${type}.png`;
  //   img.onload = () => {
  //     console.log('이미지 완료');
  //     setDownloadImg(true);
  //   };
  //   const video = document.createElement('video');
  //   video.src = 'video.mp4';
  //   video.preload = 'auto';
  //   video.onloadstart = () => {
  //     console.log('비디오 완료');
  //     setDownloadVideo(true);
  //   };
  // }
  // types.map((t, index) => {
  //   const img = new Image();
  //   const video = new Image();
  //   img.src = process.env.PUBLIC_URL + `/characters/${t}.png`;
  //   img.onload = () => {
  //     setDownloadImg[index] = true;
  //   };
  //   video.src = process.env.PUBLIC_URL + `/characters/${t}.webm`;
  //   video.onload = () => {
  //     setDownloadImg[index + 16] = true;
  //   };
  //   return null;
  // });
  // }, [dataPatch]);
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
          loop={!dataPatch || !downloadImg || !downloadvideo}
          ref={ref}
          onEnded={handleOnEnded}
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
