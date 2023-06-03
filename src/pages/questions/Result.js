import { Box, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ResultLoading from './ResultLoading';
import ResultAni from './ResultAni';
import { useDispatch, useSelector } from 'react-redux';
import { CallPostMBTIQuestionAPI } from '../../services/apis/mbtiAPICalls';
import { useNavigate } from 'react-router-dom';

const Result = function () {
  const { isDone, result: testResult } = useSelector(
    (s) => s.testResultReducer
  );
  const { choices, result, username, comment } = useSelector(
    (s) => s.mbtiReducer
  );
  const type = testResult.mbti;
  const ratioResult = testResult.ratio;
  const ratio = [
    100 - ratioResult?.E,
    100 - ratioResult?.S,
    ratioResult?.T,
    100 - ratioResult?.J,
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dataFatch, setDataFatch] = useState(false);
  const [endloading, setEndLoading] = useState(false);
  const [endAni, setEndAni] = useState(false);

  const [loading, setLoading] = useState(true);
  const [downloadImg, setDownloadImg] = useState(true);
  const [downloadVideo, setDownloadVideo] = useState(false);

  useEffect(() => {
    if (result === '') {
      alert('MBTI 유형을 작성해주세요!');
      return navigate('/');
    }
    const notAns = choices.filter((x) => x.value === '').length;
    if (notAns > 0) {
      alert('아직 응답을 완료하지 않았습니다.');
      return navigate('/question');
    }
    if (comment.length > 300) {
      alert('추가 코멘트는 300자 보다 많이 작성할 수 없습니다.');
      return navigate('/question');
    }
    dispatch(CallPostMBTIQuestionAPI()).then(() => setDataFatch(true));
    // if (!testResult.isDone)
    //   dispatch(CallPostMBTIQuestionAPI()).then(() => setDataFatch(true));
    // else {
    //   setDataFatch(true);
    // }
  }, []);

  return (
    <>
      <Box position='relative'>
        {loading && (
          <ResultLoading
            dataPatch={dataFatch}
            downloadImg={downloadImg}
            downloadVideo={downloadVideo}
            setEndLoading={setEndLoading}
            type={type}
          />
        )}
        {isDone && (
          <Box display={endAni ? 'none' : 'block'}>
            <ResultAni
              setDownloadVideo={setDownloadVideo}
              loading={endloading}
              type={type}
              setEndAni={setEndAni}
            />
          </Box>
        )}
        {/* {type && (
          <Box display={endAni ? 'block' : 'none'}>
            {endAni && <Confetti />}
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
              <Grid2
                xs={12}
                display='flex'
                justifyContent='center'
                flexDirection='column'
                minHeight={400}
              >
                <CharacterImage type={type} />
              </Grid2>
              <Grid2 xs={12}>
                <ResultInfo
                  type={type}
                  ratio={ratio}
                />
              </Grid2>
              <Grid2 xs={12}>
                <Divider sx={{ borderStyle: 'dashed' }} />
              </Grid2>
            </Grid2>
          </Box>
        )} */}
      </Box>
    </>
  );
};

export default Result;
