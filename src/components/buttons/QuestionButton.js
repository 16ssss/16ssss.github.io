import * as React from 'react';
import Button from '@mui/material/Button';
import Grid2 from "@mui/material/Unstable_Grid2";
import {useDispatch} from "react-redux";
import {SET_MBTI_CHOICE} from "../../modules/MbtiReducer";
import {useNavigate} from "react-router-dom";
import {NEXT_STEPPER} from "../../modules/StepperReducer";

export default ({question, step, choice}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnclick = (e) => {
        // dispatch({type: NEXT_SLIDE});
        dispatch({type: NEXT_STEPPER});
        dispatch({type: SET_MBTI_CHOICE, payload: {index: step, seq:question.seq, choice: e.target.value}});
        navigate(`../${+step + 1}`);

    }
    return (
        <>
            <Grid2 container columnSpacing={3} rowSpacing={1}>
                <Grid2 xs={12} md={6} minHeight={100}>
                    <Button fullWidth
                            sx={{fontSize: "1.5rem", height:"100%"}}
                            color={choice === '-3' ? "primary" : "black" }
                            onClick={handleOnclick}
                            value={-3}
                            variant={choice === '-3' ? "contained" : "text"}
                    >
                        왼쪽 선택
                    </Button>
                </Grid2>
                <Grid2 xs={12} md={6} minHeight={100}>
                    <Button fullWidth
                            sx={{fontSize: "1.5rem", height:"100%"}}
                            color={choice === '3' ? "primary" : "black" }
                            onClick={handleOnclick}
                            value={3}
                            variant={choice === '3' ? "contained" : "text"}
                    >
                        오른쪽 선택
                    </Button>
                </Grid2>
                <Grid2 xs={12} minHeight={100}>
                    <Button fullWidth
                            sx={{fontSize: "1.5rem", height:"100%"}}
                            color={choice === '0' ? "primary" : "black" }
                            onClick={handleOnclick}
                            value={0}
                            variant={choice === '0' ? "contained" : "text"}
                    >
                        반반
                    </Button>
                </Grid2>

            </Grid2>

        </>
    );
}