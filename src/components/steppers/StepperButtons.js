import Grid2 from "@mui/material/Unstable_Grid2";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {NEXT_STEPPER, PRE_STEPPER} from "../../modules/StepperReducer";
import CompleteButtonSize1 from "../buttons/CompleteButtonSize1";
import {CallPostMBTIQuestionAPI} from "../../apis/MbtiAPICalls";
import {useNavigate} from "react-router-dom";
import {KeyboardArrowRight, KeyboardArrowLeft} from "@mui/icons-material";


export default () => {
    const step = useSelector(state => state.stepperReducer);
    const mbti = useSelector(state => state.mbtiReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(mbti);
    return (
        <Grid2 container marginTop={10} justifyContent={"space-between"}>
            <Grid2 xs={step === 0 ? 4 : 3} margin={0}>
                {
                    step === 0 ?
                        <Button size={"large"}
                                fullWidth
                                onClick={() => {
                                    window.confirm("테스트를 다시 진행하시겠습니까?") && navigate("/")
                                }}
                                sx={{fontSize: 20}}
                                variant={"contained"}
                        >처음으로<br/>돌아가기</Button>
                        :
                        <Button size="large"
                                fullWidth
                                onClick={() =>
                                    dispatch({type: PRE_STEPPER})}
                                sx={{fontSize: 20}}
                        >
                            {<KeyboardArrowLeft/>} 이전
                        </Button>
                }
            </Grid2>
            <Grid2 xs={3}>
                {
                    step === 28 ?
                        <CompleteButtonSize1
                            callApi={CallPostMBTIQuestionAPI}
                            resultUrl="/result"/>
                        :
                        <Button size="large"
                                fullWidth
                                onClick={() => dispatch({type: NEXT_STEPPER})}
                                disabled={mbti.choices[step].choice === ''}
                                sx={{fontSize: 20}}
                        >
                            다음 {<KeyboardArrowRight/>}
                        </Button>
                }
            </Grid2>
        </Grid2>
    );

}
