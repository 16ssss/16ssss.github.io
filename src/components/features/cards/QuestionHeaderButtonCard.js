import {Button, Stack} from "@mui/material";
import {debounce} from "lodash";
import {NEXT_STEP, PRE_STEP} from "../../../services/reduces/stepReducer";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";

export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const step = useSelector(s => s.stepReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Grid2 container
               direction="row"
               justifyContent="space-between">
            <Grid2 xs={1}>
                {step.now === 0 ?

                    <Button size="medium"
                            onClick={() => {
                                window.confirm("메인화면으로 돌아가시겠습니까?") && navigate("/")
                            }}
                            variant="text"
                    >HOME</Button>
                    :
                    <Button sx={{justifyContent: "start", padding: 0, minWidth: 0}}
                            disabled={step.now === 0}
                            onClick={debounce(() => {
                                dispatch({type: PRE_STEP});
                            }, 100)}>
                        {<KeyboardArrowLeft fontSize="large" viewBox="8 0 24 24"/>}
                    </Button>
                }
            </Grid2>
            <Grid2 xs>
                <Typography color="primary"
                            fontSize="x-large"
                            align="center"
                            whiteSpace="nowrap"
                            alignContent="center"
                > U M I
                </Typography>
            </Grid2>
            <Grid2 xs={1} display="flex" justifyContent="end">
                <Button sx={{justifyContent: "flex-end", padding: 0, minWidth: 0}}
                        disabled={mbti.choices[step.now]?.choice === "" || step.now === step.total}
                        onClick={debounce(() => {
                            dispatch({type: NEXT_STEP});
                        }, 100)}
                >
                    {<KeyboardArrowRight fontSize="large" viewBox="0 0 7 24"/>}
                </Button>
            </Grid2>
        </Grid2>
    );
}