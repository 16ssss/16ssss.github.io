import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_COMMENT } from '../../modules/reducer/personalityTestReducer';

const PersonalityTestComment = function () {
  const test = useSelector((s) => s.personalityTest);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnchangeInput = (e) => {
    dispatch({ type: SET_COMMENT, payload: e.target.value });
  };

  return (
    <Box>
      <Button
        size='medium'
        onClick={() => {
          window.confirm('이전화면으로 돌아가시겠습니까?') && navigate(-1);
        }}
        variant='contained'
        sx={{ marginTop: 3 }}
      >
        이전
      </Button>
      <Typography
        variant='h6'
        mt={5}
      >
        추가 코멘트를 남겨주세요.[선택] (<span>{test.comment.length}</span>
        /200자)
      </Typography>
      <TextField
        multiline
        fullWidth
        maxRows={5}
        minRows={5}
        name='test-comment'
        value={test.comment}
        onChange={handleOnchangeInput}
        error={test.comment.length > 200}
        placeholder='문항이 싫거나 이상한 이유를 적어주시면 많은 도움이 됩니다! &#13;&#10;감사합니다.'
        helperText={
          test.comment.length > 200 ? '200자 미만 작성해주세요.' : null
        }
        sx={{ whiteSpace: 'pre-line' }}
      />
      <Button
        fullWidth
        variant='contained'
        sx={{ mt: 10 }}
        disabled={test.comment.length > 200}
        onClick={() => {
          if (test.comment.length > 200) {
            alert('추가 코멘트는 200자 보다 많이 작성할 수 없습니다.');
          }
          window.confirm('테스트를 완료할까?') && navigate('../result');
        }}
      >
        완료
      </Button>
    </Box>
  );
};
export default PersonalityTestComment;
