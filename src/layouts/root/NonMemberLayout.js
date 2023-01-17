import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import PrimarySearchAppBar from "../../components/appbars/PrimarySearchAppBar";
export default function NonMemberLayout() {
    return (
        <>
            <PrimarySearchAppBar/>
            <Box display='flex' minHeight='100vh' flexDirection='column' paddingTop={10}>
                <Container
                    disableGutters
                >
                    <Outlet />
                </Container>
            </Box>
        </>
    );
}