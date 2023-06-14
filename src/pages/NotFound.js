import { useNavigate } from 'react-router-dom';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Button, Typography } from '@mui/material';
import Footer from '../components/footers/Footer';

const NotFound = function () {
  const navigate = useNavigate();
  return (
    <>
      <Box
        flex='1'
        flexShrink='0'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        position='relative'
      >
        <Grid2
          container
          gap={10}
        >
          <Grid2 xs={12}>
            <Typography
              variant='h5'
              fontWeight='800'
              align='center'
            >
              존재하지 않는 페이지입니다.
            </Typography>
          </Grid2>
          <Grid2 xs={12}>
            <Button
              fullWidth
              variant='contained'
              onClick={() => {
                navigate('/');
              }}
            >
              메인화면으로 이동하기
            </Button>
          </Grid2>
        </Grid2>
      </Box>
      <Footer />
    </>
  );
};

export default NotFound;
