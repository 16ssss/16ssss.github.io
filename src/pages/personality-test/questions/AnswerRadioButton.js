import { FormControlLabel, Radio, debounce } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { SET_ANSWER } from '../../../modules/reducer/personalityTestReducer';
import { TOTAL_QUESTION } from '../../../config';
import { useNavigate } from 'react-router-dom';
const AnswerRadioButton = function ({
  label,
  group,
  value,
  seq,
  checked,
  size,
  color,
  setHover,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnclick = debounce(async (e) => {
    dispatch({
      type: SET_ANSWER,
      payload: { seq: seq, index: group, choice: e.target.value },
    });

    if (group + 1 === TOTAL_QUESTION) {
      window.confirm('설문을 완료하였습니까?') &&
        navigate('/personality-test/comment');
    }
  }, 300);
  return (
    <>
      <FormControlLabel
        control={
          <Radio
            icon={<CircleOutlinedIcon color={color} />}
            checkedIcon={<CircleIcon color={color} />}
            sx={{
              '& .MuiSvgIcon-root': {
                fontSize: size,
              },
            }}
          />
        }
        value={value}
        onClick={handleOnclick}
        checked={checked}
        sx={{ textAlign: 'center', display: 'flex', margin: '0' }}
        onMouseOver={() => {
          +value <= -1
            ? setHover('left')
            : +value === 0
            ? setHover('')
            : setHover('right');
        }}
        onMouseOut={() => {
          setHover('');
        }}
      />
    </>
  );
};
export default AnswerRadioButton;
