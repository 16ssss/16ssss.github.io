import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../footers/Footer';

export default function PersonalityTestLayouts() {
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
      <Box
        flex='1'
        flexShrink='0'
      >
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}
