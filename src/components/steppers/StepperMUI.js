import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import {useSelector} from "react-redux";


export default () => {
    const step = useSelector(state => state.stepperReducer);

    return (
        <MobileStepper
            variant="progress"
            steps={29}
            position="top"
            activeStep={step}
            sx={{"& span":{
                width: "100%"
            }}}
        />
    );
}