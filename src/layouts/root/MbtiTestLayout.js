import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import Footer from "../../components/footers/Footer";
import StepperMUI from "../../components/steppers/StepperMUI";
import StepperButtons from "../../components/steppers/StepperButtons";

export default () => {
    return (
        <>
            <StepperMUI/>
            <Container>
                <Box display='flex' minHeight='80vh' flexDirection='column' paddingTop={5}
                     boxSizing="border-box"
                >
                    <Outlet/>
                    <StepperButtons/>
                </Box>
            </Container>
            <Footer/>
        </>
    );
}