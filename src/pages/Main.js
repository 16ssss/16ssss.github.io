import { Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Grid2
        container
        margin={2}
        gap={2}
      >
        <Grid2 xs={12}>
          <Typography variant='h4'>
            반가워! <br />
            설문조사 테스트 하러갈래?
          </Typography>
        </Grid2>
        <Grid2 xs={12}>
          <Button
            fullWidth
            variant='contained'
            onClick={() => navigate('/personality-test')}
          >
            하러가기
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
}
