import {Button, Stack} from "@mui/material";
import {debounce} from "lodash";
import {NEXT_STEP, PRE_STEP} from "../../../services/reduces/stepReducer";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const step = useSelector(s => s.stepReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Stack direction="row"
               justifyContent="space-between">
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
                    {<KeyboardArrowLeft fontSize="large"/>}
                </Button>
            }
            <Typography color="primary"
                        fontSize="x-large"
                        align="center"
                        whiteSpace="nowrap"
                        alignContent="center"
            > U M I
            </Typography>
            <Button sx={{justifyContent: "flex-end", padding: 0, minWidth: 0}}
                    disabled={mbti.choices[step.now]?.choice === "" || step.now === step.total}
                    onClick={debounce(() => {
                        dispatch({type: NEXT_STEP});
                    }, 100)}
            >
                {<KeyboardArrowRight fontSize="large"/>}
            </Button>
        </Stack>
    );
}