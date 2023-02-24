import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {NEXT_STEPPER, PRE_STEPPER} from "../../modules/StepperReducer";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {debounce, throttle} from "lodash";


export default ({step, choice}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <MobileStepper
            variant="text"
            steps={29}
            position="static"
            activeStep={step}
            sx={{
                fontSize: "2rem",
                height: "3vmax",
                "& span": {
                    width: "100%"
                }
            }}
            nextButton={
                step === 29 ?
                    <Button size="medium"
                            color="black"
                            disabled
                    />
                    :
                    <Button size="medium"
                            color="black"
                            onClick={throttle(() => dispatch({type: NEXT_STEPPER}),200)}
                            disabled={choice === ''}
                    >
                        {<KeyboardArrowRight/>}
                    </Button>
            }
            backButton={
                step === 0 ?
                    <Button size="medium"
                            onClick={() => {
                                window.confirm("메인화면으로 돌아가시겠습니까?") && navigate("/")
                            }}
                            variant="text"
                    >HOME</Button>
                    :
                    <Button size="medium"
                            color="black"
                            onClick={throttle(() => dispatch({type: PRE_STEPPER}),200)}
                    >
                        {<KeyboardArrowLeft/>}
                    </Button>
            }
        />
    );
}