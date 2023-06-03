import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import QuestionFooter from '../features/footers/QuestionFooter';

const MainLayout = function () {
  return (
    <>
      <Container
        maxWidth='sm'
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box
          flex='1'
          flexShrink='0'
        >
          <Outlet />
        </Box>
        <QuestionFooter />
      </Container>
    </>
  );
};
export default MainLayout;
