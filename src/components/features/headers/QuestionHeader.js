import {useDispatch, useSelector} from "react-redux";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ProgressStepper from "../steppers/ProgressStepper";
import * as React from "react";
import QuestionHeaderButtonCard from "../cards/QuestionHeaderButtonCard";

export default () => {
    const step = useSelector(s => s.stepReducer);
    return (
        <Grid2 container spacing={0}>
            <Grid2 xs={12}>
                <QuestionHeaderButtonCard/>
            </Grid2>
            <Grid2 xs={12}>
                <Grid2 container>
                    <Grid2 xs={2} sm={1.5}>
                        <Typography align="center"
                                    color="primary">
                            <span> {` ${step.now + 1}`}</span>
                            <span> / {step.total + 1}</span>
                        </Typography>
                    </Grid2>
                    <Grid2 xs marginLeft={1}>
                        <ProgressStepper/>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
        ;
}