import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USERNAME } from '../../../modules/reducer/personalityTestReducer';

export default function InputName() {
  const username = useSelector((s) => s.personalityTest.username);
  const dispatch = useDispatch();
  const onChangeHandle = (e) => {
    dispatch({ type: [e.target.name], payload: e.target.value });
  };

  return (
    <TextField
      fullWidth
      name={SET_USERNAME}
      onChange={onChangeHandle}
      value={username}
      label='이름'
      placeholder='이름을 입력해줘!'
    ></TextField>
  );
}
