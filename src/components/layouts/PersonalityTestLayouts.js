import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../footers/Footer';

export default function PersonalityTestLayouts() {
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
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
