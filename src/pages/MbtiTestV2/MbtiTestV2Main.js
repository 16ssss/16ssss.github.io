import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import TextFieldSize1WithText from "../../components/textfields/TextFieldSize1WithText";
import {useDispatch, useSelector} from "react-redux";
import {RESET_MBTI_TEST, SET_MBTI_RESULT, SET_MBTI_USERNAME} from "../../modules/MbtiReducer";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {CallGetMBTIQuestionAPI} from "../../apis/MbtiAPICalls";
import {RESET_STEPPER} from "../../modules/StepperReducer";

export default () => {
    const mbti = useSelector(state => state.mbtiReducer);
    const dispatch = useDispatch();
    const onChangeHandle = (e) => {
        dispatch({type: [e.target.name], payload: e.target.value})
    }
    const navigate = useNavigate();
    useEffect(() => {
        dispatch({type: RESET_MBTI_TEST});
    }, [])

    return (
        <Grid2 container={true} columnSpacing={{xs:0, lg:5}} rowSpacing={10}>
            <Grid2 xs={12}>
                <Typography variant="h2" align={"center"} padding={0}>
                    YMI의 성격유형 검사 테스트
                </Typography>
            </Grid2>
            <Grid2 xs={6}>
                <TextFieldSize1WithText
                    title={"성함"}
                    name={SET_MBTI_USERNAME}
                    onChange={onChangeHandle}
                    value={mbti.username}
                    helperText="여러분의 성함을 입력해주세요!">
                </TextFieldSize1WithText>
            </Grid2>
            <Grid2 xs={6}>
                <TextFieldSize1WithText
                    title={"MBTI"}
                    name={SET_MBTI_RESULT}
                    onChange={onChangeHandle}
                    value={mbti.result}
                    helperText="이전에 검사했을때 나왔던 MBTI 혹은 예상하는 자신의 MBTI를 적어주세요!">
                </TextFieldSize1WithText>
            </Grid2>
            <Grid2 xs={12}>
                <Button fullWidth
                        size={"large"}
                        variant={"contained"}
                        onClick={() => {
                            dispatch(CallGetMBTIQuestionAPI());
                            dispatch({type: RESET_STEPPER});
                            navigate("/questions");

                        }}
                        disabled={mbti.username === "" || mbti.result === ""}
                >
                    시작하기
                </Button>
            </Grid2>
        </Grid2>
    );

};
