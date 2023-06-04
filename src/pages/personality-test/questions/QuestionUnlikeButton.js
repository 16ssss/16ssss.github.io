import { Fab } from '@mui/material';
import { useDispatch } from 'react-redux';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { TOGGLE_UNLIKE } from '../../../modules/reducer/personalityTestReducer';

const QuestionUnlikeButton = function ({ index, value }) {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch({
      type: TOGGLE_UNLIKE,
      payload: index,
    });
  };
  return (
    <Fab
      size='small'
      color={value ? 'secondary' : 'grey'}
      aria-label='unlike'
      sx={{
        boxShadow: 'none',
        width: 30,
        height: 30,
        minHeight: 0,
        '&:hover': { boxShadow: 'none' },
      }}
    >
      <ThumbDownAltIcon
        onClick={handleOnClick}
        fontSize='small'
      />
    </Fab>
  );
};
export default QuestionUnlikeButton;
