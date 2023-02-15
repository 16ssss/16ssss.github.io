import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import {useSelector} from "react-redux";


export default ({step}) => {

    return (
        <MobileStepper
            variant="progress"
            steps={29}
            position="static"
            activeStep={step}
            sx={{padding: "0",
                "& span":{
                width: "100%"
            }}}
        />
    );
}