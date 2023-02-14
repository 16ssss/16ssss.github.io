import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import PrimarySearchAppBar from "../../components/appbars/PrimarySearchAppBar";
import Footer from "../../components/footers/Footer";

export default function NonMemberLayout() {
    return (
        <>
            <PrimarySearchAppBar/>
            <Container
                disableGutters
            >
                <Box display='flex' minHeight='100vh' flexDirection='column' paddingTop={10}
                     boxSizing="border-box"
                >

                    <Outlet/>
                </Box>

            </Container>
            <Footer/>
        </>
    );
}