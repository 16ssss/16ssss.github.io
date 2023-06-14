import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import TestInfo from './index/TestInfo';
import InputName from './index/InputName';
import InputExpectedType from './index/InputExpectedType';
import TestStartButton from './index/TestStartButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_TEST } from '../../modules/reducer/personalityTestReducer';
import IndexHeader from './index/IndexHeader';

export default function PersonalityTestIndex() {
  const [isLoading, setIsLoading] = useState(true);
  const test = useSelector((s) => s.personalityTest);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading && test.isEndTest) {
      dispatch({ type: RESET_TEST });
      alert('테스트가 초기화 되었습니다.');
    }
    setIsLoading(false);
  }, [dispatch, isLoading, test.isEndTest]);

  return (
    <>
      <Grid2
        container
        columnSpacing={{ xs: 0, lg: 5 }}
        rowSpacing={{ xs: 2, sm: 3 }}
      >
        <Grid2 xs={12}>
          <IndexHeader />
        </Grid2>
        <Grid2 xs={12}>
          <TestInfo />
        </Grid2>
        <Grid2 xs={12}>
          <InputName />
        </Grid2>
        <Grid2 xs={12}>
          <InputExpectedType />
        </Grid2>
        <Grid2 xs={12}>{<TestStartButton />}</Grid2>
      </Grid2>
    </>
  );
}
