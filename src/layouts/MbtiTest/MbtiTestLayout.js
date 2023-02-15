import {Outlet} from 'react-router-dom';
import Footer from "../../components/footers/Footer";
import StepperMUI from "../../components/steppers/TopStepperMUI";
import {Fab, SvgIcon, Tooltip} from "@mui/material";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import BoomDown from "../../resources/imgs/BoomDown";
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