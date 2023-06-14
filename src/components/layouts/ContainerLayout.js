import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const ContainerLayout = function () {
  return (
    <Container
      maxWidth='sm'
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Outlet />
    </Container>
  );
};

export default ContainerLayout;
