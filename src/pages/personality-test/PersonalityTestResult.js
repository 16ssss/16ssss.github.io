import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { CallPostMBTIQuestionAPI } from '../../utils/mbtiAPICalls';
import { useNavigate } from 'react-router-dom';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ResultInfo from './Result/ResultInfo';
import CharacterImage from './Result/CharaterImage';
import BigConfetti from '../../components/confettis/BigConfetti';

import ResultLoading from './Result/ResultLoading';
import ResultAni from './Result/ResultAni';
import KakaoTalkShare from '../../components/shares/KakaoTalkShare';
import { personalitiesUrl } from '../../config';
import TypeInfoList from './Result/TypeInfoList';
import HashTag from './Result/HashTag';
import PersonalityType from './Result/PersonalityType';
import RelationshipUMI from './Result/RelationshipUMI';

const PersonalityTestResult = function () {
  const [init, setInit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEndAni, setIsEndAni] = useState(false);
  const [isDownloadVideo, setIsDownloadVideo] = useState(false);
  const [isDownloadImg, setIsDownloadImg] = useState(false);
  const dispatch = useDispatch();
  const test = useSelector((s) => s.personalityTest);

  const navigate = useNavigate();

  useEffect(() => {
    if (init) {
      if (test.username === '' || test.expectedType === null) {
        alert('이름 및 MBTI 유형을 작성해주세요!');
        return navigate('/personality-test');
      }
      const notAns = test.answers.filter((x) => x.choice === '').length;
      if (notAns > 0) {
        alert('모든 검사에 응답을 완료하지 않았습니다.');
        return navigate('/personality-test/questions');
      }
      if (test.comment.length > 200) {
        alert('추가 코멘트는 200자 보다 많이 작성할 수 없습니다.');
        return navigate('/personality-test/comment');
      }
      if (test.resultedType === null) {
        dispatch(CallPostMBTIQuestionAPI());
      }
    }
    setInit(true);
  }, [
    dispatch,
    init,
    navigate,
    test.answers,
    test.comment.length,
    test.expectedType,
    test.resultedType,
    test.username,
  ]);

  return (
    <Box>
      {isEndAni && <BigConfetti />}
      {isLoading && (
        <ResultLoading
          isDataFetch={test.resultedType !== null}
          isDownloadImg={isDownloadImg}
          isDownloadVideo={isDownloadVideo}
          setIsLoading={setIsLoading}
        />
      )}

      {/* // 로딩하는 동안 미리 캐싱시켜놓아야함 */}
      {test.resultedType && !isEndAni && (
        <ResultAni
          SetIsDownloadVideo={setIsDownloadVideo}
          isLoading={isLoading}
          setIsEndAni={setIsEndAni}
          type={test.resultedType}
        />
      )}
      {/* // 결과 이미지 미리 캐싱 */}
      {test.resultedType && (
        <Box display={isEndAni ? 'block' : 'none'}>
          <Grid2
            container
            rowGap={2}
          >
            <Grid2 xs={12}>
              <Typography
                variant='h4'
                color='primary'
                align='center'
                fontWeight='800'
              >
                UMI
              </Typography>
            </Grid2>
            <Grid2
              xs={12}
              display='flex'
              justifyContent='center'
              flexDirection='column'
              width='100%'
            >
              <CharacterImage
                type={test.resultedType}
                setIsDownloadImg={setIsDownloadImg}
              />
            </Grid2>
            <Grid2 xs={12}>
              <PersonalityType
                type={test.resultedType}
                ratio={test.resultRatio}
              />
            </Grid2>
            <Grid2 xs={12}>
              <HashTag type={test.resultedType} />
            </Grid2>
            <Grid2 xs={12}>
              <ResultInfo
                type={test.resultedType}
                ratio={test.resultRatio}
              />
            </Grid2>
            <Grid2
              xs={12}
              display='flex'
              justifyContent='end'
              alignItems='center'
              columnGap={2}
            >
              <KakaoTalkShare />
            </Grid2>
            <Grid2 xs={12}>
              <Divider sx={{ borderStyle: 'dashed' }} />
            </Grid2>
            <Grid2 xs={12}>
              <RelationshipUMI relationship={test.resultRelationShip} />
            </Grid2>
            <Grid2 xs={12}>
              <Divider sx={{ borderStyle: 'dashed' }} />
            </Grid2>
            <Grid2 xs={12}>
              <TypeInfoList type={test.resultedType} />
            </Grid2>
            <Grid2 xs={12}>
              <Divider sx={{ borderStyle: 'dashed' }} />
            </Grid2>
            <Grid2 xs={12}>
              <Button
                fullWidth
                size='large'
                variant='contained'
                color='primary'
                onClick={() =>
                  window.open(
                    personalitiesUrl[test.resultedType],
                    '_blank',
                    'noopener, noreferrer'
                  )
                }
              >
                나의 성격 유형에 대한 설명 보러가기
              </Button>
            </Grid2>
            <Grid2
              xs={12}
              mt={2}
            >
              <Button
                fullWidth
                size='large'
                variant='outlined'
                color='primary'
                onClick={() => {
                  window.confirm('정말 다시할꺼에요??') &&
                    navigate('/personality-test');
                  return;
                }}
              >
                재검사 하러가기
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      )}
    </Box>
  );
};

export default PersonalityTestResult;
