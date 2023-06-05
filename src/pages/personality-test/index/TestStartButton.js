import { Button, debounce } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TestStartButton = function () {
  const navigate = useNavigate();
  const { characterType, username } = useSelector((s) => s.personalityTest);
  return (
    <Button
      fullWidth
      size={'large'}
      variant={'contained'}
      onClick={debounce(() => {
        if (window.confirm('테스트를 시작할게!')) {
          navigate('/personality-test/questions');
        }
      }, 200)}
      disabled={username === '' || characterType === null}
    >
      시작하기
    </Button>
  );
};

export default TestStartButton;
