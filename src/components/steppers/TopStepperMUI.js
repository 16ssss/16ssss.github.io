import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import {useSelector} from "react-redux";


export default () => {
    const step = useSelector(s => s.stepperReducer);

    return (
        <MobileStepper
            variant="progress"
            steps={29}
            position="top"
            activeStep={step}
            sx={{paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                "& span":{
                width: "100%"
            }}}
        />
    );
}