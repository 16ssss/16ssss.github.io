import { Autocomplete, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { SET_EXPECTED_TYPE } from '../../../modules/reducer/personalityTestReducer';
import { typeList } from '../../../config';

export default function InputExpectedType() {
  const expectedType = useSelector((s) => s.personalityTest.expectedType);
  const dispatch = useDispatch();
  const handleOnchangeAutocomplete = (e, newValue) => {
    dispatch({ type: SET_EXPECTED_TYPE, payload: newValue });
  };
  return (
    <Autocomplete
      disablePortal
      fullWidth
      id='combo-box-demo'
      options={typeList}
      sx={{ marginBottom: '1vmax' }}
      onChange={handleOnchangeAutocomplete}
      value={expectedType || null}
      renderInput={(params) => (
        <TextField
          {...params}
          // placeholder='예상 성격 유형'
          label='예상 성격 유형'
          helperText='이전에 검사한 결과 혹은 예상하는 결과를 적어주세요!'
        />
      )}
    />
  );
}
