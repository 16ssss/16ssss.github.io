import {Outlet} from 'react-router-dom';
import Footer from "../../components/footers/Footer";
import StepperMUI from "../../components/steppers/TopStepperMUI";

export default () => {
    return (
        <>
            <StepperMUI/>
            {/*<StepperMUI/>*/}
            {/*<Box display='flex' minHeight='80vh' flexDirection='column' paddingTop={5}*/}
            {/*     boxSizing="border-box"*/}
            {/*>*/}
            <Outlet/>
            {/*<StepperButtons/>*/}


            <Footer/>
        </>
    );
}