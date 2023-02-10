import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {NEXT_STEPPER, PRE_STEPPER} from "../../modules/StepperReducer";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


export default () => {
    const step = useSelector(state => state.stepperReducer);
    const mbti = useSelector(state => state.mbtiReducer);
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
                step === 28 ?
                    <Button size="medium"
                            color="black"
                            disabled
                    />
                    :
                    <Button size="medium"
                            color="black"
                            onClick={() => dispatch({type: NEXT_STEPPER})}
                            disabled={mbti.choices[step].choice === ''}
                    >
                        {<KeyboardArrowRight/>}
                    </Button>
            }
            backButton={
                step === 0 ?
                    <Button size="medium"
                            onClick={() => {
                                window.confirm("테스트를 다시 진행하시겠습니까?") && navigate("/")
                            }}
                            variant="contained"
                    >처음으로<br/>돌아가기</Button>
                    :
                    <Button size="medium"
                            color="black"
                            onClick={() => dispatch({type: PRE_STEPPER})}
                    >
                        {<KeyboardArrowLeft/>}
                    </Button>
            }
        />
    );
}