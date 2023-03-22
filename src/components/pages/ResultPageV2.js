import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ResultProgressBar from "../features/progress-bars/ResultProgressBar";
import Box from "@mui/material/Box";
import {useEffect} from "react";
import KakaoTalkShare from "../features/shares/KakaoTalkShare";
import {Button, Divider, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";


const PrimarySpan = styled("span")(({theme}) => ({
    color: theme.palette.primary.main
}))
const SecondarySpan = styled("span")(({theme}) => ({
    color: theme.palette.secondary.main
}))

const LeftProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

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
    ESTP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estp",
    ESFP: "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfp",
}

export default () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const result = "ENTP";
    const navigate = useNavigate();
    return (
        <Grid2 container rowGap={1}>
            <Grid2 xs={12}>
                <Typography variant="h2" color="primary" align="center">
                    Ur MBTI
                </Typography>
            </Grid2>
            <Grid2 xs={12} display="flex" justifyContent="center">
                <img style={{backgroundColor:"blue"}} width="100%" height="400px"/>
            </Grid2>
            <Grid2 xs={12}>
                <Typography variant="h2" align="center">
                    <PrimarySpan>E</PrimarySpan>
                    {" "}
                    <SecondarySpan>N</SecondarySpan>
                    {" "}
                    <PrimarySpan>T</PrimarySpan>
                    {" "}
                    <SecondarySpan>P</SecondarySpan>
                </Typography>
            </Grid2>
            <Grid2 xs={12}>
                <ResultProgressBar value={50} type="left" left="E" right="I"/>
                <br/>
                <ResultProgressBar value={60} type="right" left="S" right="N"/>
                <br/>
                <ResultProgressBar value={50} type="left" left="T" right="F"/>
                <br/>
                <ResultProgressBar value={70} type="right" left="J" right="P"/>
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
    );
}