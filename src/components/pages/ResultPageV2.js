import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import ResultProgressBar from "../features/progress-bars/ResultProgressBar";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import KakaoTalkShare from "../features/shares/KakaoTalkShare";
import {Button, Divider, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Confetti from "../features/confettis/Confetti";
import {useDispatch, useSelector} from "react-redux";
import MbtiImageTypeSwitch from "../features/sliders/MbtiImageTypeSwitch";
import {CallPostMBTIQuestionAPI} from "../../services/apis/mbtiAPICalls";
import ResultLoadingPage from "./ResultLoadingPage";
import ResultAni from "./ResultAni";


const PrimarySpan = styled("span")(({theme}) => ({
    color: theme.palette.primary.main
}))
const SecondarySpan = styled("span")(({theme}) => ({
    color: theme.palette.secondary.main
}))

const personalitiesUrl = {
    INTJ: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intj",
    INTP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intp",
    ENTJ: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entj",
    ENTP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp",
    INFJ: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infj",
    INFP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infp",
    ENFJ: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfj",
    ENFP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfp",
    ISTJ: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istj",
    ISFJ: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfj",
    ESTJ: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estj",
    ESFJ: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfj",
    ISTP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp",
    ISFP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-isfp",
    ESTP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9`%EC%9C%A0%ED%98%95-estp",
    ESFP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfp",
}
export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const testResult = useSelector(s => s.testResultReducer);
    const {imageType} = useSelector(s => s.settingReducer);
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const [resultAni, setResultAni] = useState(true);
    const [loadingAni, setLoadingAni] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        !testResult.isDone && dispatch(CallPostMBTIQuestionAPI());
        setLoading(false);
    }, [])
    /**
     * 카카오 api 연동
     * */
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script)
        }
    }, []);
    const result = testResult.result?.mbti;
    // const result = "INFP";
    const type = result?.split("");
    const rate = [30, 20, 30, 70];
    const navigate = useNavigate();
    return (
        loadingAni ?
            <ResultLoadingPage handleOnEnded={() => {
                // 로딩이 완료됐으면 종료
                if (loading == false) {
                    setLoadingAni(false);

                }
            }}
            />
            :
            resultAni ?
                <ResultAni handleOnEnded={() => {
                    setResultAni(false)
                }}/>
                :
                <>
                    <Confetti/>
                    <Grid2 container rowGap={1}>
                        <Grid2 xs={12}>
                            <Typography variant="h2" color="primary" align="center">
                                Ur MBTI
                            </Typography>
                        </Grid2>
                        <Grid2 xs={12} display="flex" justifyContent="center" flexDirection="column" minHeight={400}>
                            {/*<img style={{backgroundColor: "blue"}} width="100%" height="400px"/>*/}
                            <img src={`/images/characters/${result}_${imageType}.png`}
                                 sx={{objectFit: "scale-down"}}
                                 alt={`/images/characters/${result}_${imageType}`}/>
                            <MbtiImageTypeSwitch/>
                        </Grid2>
                        <Grid2 xs={12}>
                            <Typography variant="h2" align="center">
                            <span
                                style={{color: rate[0] > 50 ? theme.palette.primary.main : theme.palette.secondary.main}}>{type[0]}</span>
                                {" "}
                                <span
                                    style={{color: rate[1] > 50 ? theme.palette.primary.main : theme.palette.secondary.main}}>{type[1]}</span>
                                {" "}
                                <span
                                    style={{color: rate[2] > 50 ? theme.palette.primary.main : theme.palette.secondary.main}}>{type[2]}</span>
                                {" "}
                                <span
                                    style={{color: rate[3] > 50 ? theme.palette.primary.main : theme.palette.secondary.main}}>{type[3]}</span>
                            </Typography>
                        </Grid2>
                        <Grid2 xs={12}>
                            <ResultProgressBar value={rate[0] < 50 ? 100 - rate[0] : rate[0]}
                                               type={rate[0] < 50 ? "right" : "left"} left="E" right="I"/>
                            <br/>
                            <ResultProgressBar value={rate[1] < 50 ? 100 - rate[1] : rate[1]}
                                               type={rate[1] < 50 ? "right" : "left"} left="S" right="N"/>
                            <br/>
                            <ResultProgressBar value={rate[2] < 50 ? 100 - rate[2] : rate[2]}
                                               type={rate[2] < 50 ? "right" : "left"} left="T" right="F"/>
                            <br/>
                            <ResultProgressBar value={rate[3] < 50 ? 100 - rate[3] : rate[3]}
                                               type={rate[3] < 50 ? "right" : "left"} left="J" right="P"/>
                        </Grid2>

                        <Grid2 xs={12} display="flex" justifyContent="end" alignItems="center" columnGap={2}>
                            <Typography align="center">
                                공유하기
                            </Typography>
                            <Box width={30} height={30}>
                                <KakaoTalkShare/>
                            </Box>
                        </Grid2>
                        <Grid2 xs={12}>
                            <Divider/>
                        </Grid2>
                        <Grid2 xs={12}>
                            <Button fullWidth
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                // onClick={() => window.open(personalitiesUrl[mbti.testResult.personality], "_blank", "noopener, noreferrer")}
                            >
                                나의 성격 유형에 대한 설명 보러가기
                            </Button>
                        </Grid2>

                        <Grid2 item xs={12}>
                            <Button fullWidth size="large"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        navigate("/");
                                        // dispatch(CallGetMBTIQuestionAPI());
                                    }}>
                                재검사하기
                            </Button>
                        </Grid2>
                    </Grid2>
                </>

    );
}