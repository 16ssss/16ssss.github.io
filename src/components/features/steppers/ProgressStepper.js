import * as React from "react";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import {LinearProgress, linearProgressClasses} from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: "90%",
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        // border: `solid ${theme.palette.primary.main}`
        border: "none"
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 1,
        height: "100%",
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary : '#308fe8',
        border: "none"
    },
}));
export default () => {
    const step = useSelector(s => s.stepReducer);
    return (
        // <MobileStepper
        //     variant="progress"
        //     steps={step.total}
        //     position="static"
        //     activeStep={step.now}
        //     sx={{
        //         height: "90%",
        //         padding: 0,
        //         "& span": {
        //             width: "100%",
        //             height: "90%",
        //             borderRadius: 20,
        //             "& span": {
        //                 height: "100%"
        //             }
        //         }
        //     }}
        // />
        <BorderLinearProgress variant="determinate" value={step.now / step.total * 100}
        />
    );
}