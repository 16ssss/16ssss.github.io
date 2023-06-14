import { Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router-dom';

const InfoMUI = function () {
  const navigate = useNavigate();
  return (
    <Grid2
      container
      gap={2}
    >
      <Grid2 xs={12}>
        <img
          src={process.env.PUBLIC_URL + `/characters/infp_white.png`}
          style={{ width: '100%', objectFit: 'scale-down' }}
          alt={`character images`}
        />
      </Grid2>
      <Grid2 xs={12}>
        <Typography>성격 유형을 한번 알아보러 가볼까요?</Typography>
      </Grid2>
      <Grid2 xs={12}>
        <Button
          fullWidth
          variant='contained'
          onClick={() => navigate('/personality-test')}
          sx={{ height: 100, fontSize: 'large' }}
        >
          MUI 성격 유형 검사 하러가기
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default InfoMUI;
