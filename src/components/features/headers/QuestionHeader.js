import {useDispatch, useSelector} from "react-redux";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ProgressStepper from "../steppers/ProgressStepper";
import * as React from "react";
import {Button, Stack} from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {debounce} from "lodash";
import {NEXT_STEP, PRE_STEP} from "../../../services/reduces/stepReducer";

export default () => {
    const step = useSelector(s => s.stepReducer);
    const dispatch = useDispatch();
    return (
        <Grid2 container spacing={0}>
            <Grid2 xs={12}
                   display="flex"
                   direction="row"
                   justifyContent="space-between">
                <Button sx={{justifyContent: "start", padding: 0, minWidth:0}}
                        disabled={step.now===0}
                        onClick={debounce(() => {
                            dispatch({type:PRE_STEP});
                        })}
                >
                    {<KeyboardArrowLeft fontSize="large"/>}
                </Button>
                <Typography color="primary"
                            fontSize="x-large"
                            align="center"
                            whiteSpace="nowrap"
                            alignContent="center"
                > U M I
                </Typography>
                <Button sx={{justifyContent: "flex-end", padding: 0, minWidth:0}}
                        disabled={step.now===step.total}
                        onClick={debounce(() => {
                            dispatch({type:NEXT_STEP});
                        })}
                >
                    {<KeyboardArrowRight fontSize="large"/>}
                </Button>
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