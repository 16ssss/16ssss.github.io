import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import PrimarySearchAppBar from "../../components/appbars/PrimarySearchAppBar";
export default function NonMemberLayout() {
    return (
        <>
            <PrimarySearchAppBar/>
            <Box display='flex' minHeight='100vh' flexDirection='column'>
                <Container
                    maxWidth='lg'
                    disableGutters
                >
                    <Outlet />
                </Container>
            </Box>
        </>
    );
}