import QuestionCard from "../components/cards/QuestionCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CallGetMBTIQuestionAPI, CallPostMBTIQuestionAPI} from "../apis/MbtiAPICalls";
import Typography from "@mui/material/Typography";
import CompleteButtonSize1 from "../components/buttons/CompleteButtonSize1";
import {Autocomplete, Grid, TextField} from "@mui/material";
import {SET_MBTI_COMMENT, SET_MBTI_RESULT, SET_MBTI_USERNAME} from "../modules/MbtiReducer";

const mbtiList = ["ESTP", "ESTJ", "ESFP", "ESFJ", "ENFP", "ENFJ", "ENTP", "ENTJ", "ISTP", "ISTJ", "ISFP", "ISFJ", "INFP", "INFJ", "INTP", "INTJ"];

const MbtiTest = () => {
    const mbti = useSelector((state) => state.mbtiReducer)
    const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(0);

    useEffect(() => {
        dispatch(CallGetMBTIQuestionAPI())
    }, [])

    const handleOnchangeInput = (e) => {
        dispatch({type:SET_MBTI_COMMENT, payload: e.target.value})
        let len = 0;
        for (let i = 0; i < mbti.comment.length; i++) {
            if (escape(mbti.comment.charAt(i)).length == 6) {
                len++;
            }
            len++;
        }
        setInputCount(len);
        // setInputCount(e.target.value.replace(/[\sa-zA-Z0-9`~!@#$%^&*()_+-={}\[\];':",./<>?]/, "\n").length);
    };

    const handleOnchangeAutocomplete = (e, newValue) => {
        dispatch({type: SET_MBTI_RESULT, payload: newValue});
    }
    const handleOnchangeDispatch = (e) => {
        dispatch({type: [e.target.name], payload: e.target.value})
    }
    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h2" textAlign="center">
                        MBTI 테스트
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">성함을 작성해 주세요</Typography>
                    <TextField
                        fullWidth
                        label="성함"
                        name={SET_MBTI_USERNAME}
                        onChange={handleOnchangeDispatch}
                        value={mbti.username}
                    ></TextField>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6">자신의 MBTI를 작성해주세요</Typography>
                    <Autocomplete
                        disablePortal
                        fullWidth
                        id="combo-box-demo"
                        options={mbtiList}
                        sx={{marginBottom: '1vmax'}}
                        onChange={handleOnchangeAutocomplete}
                        renderInput={(params) => <TextField {...params} label="MBTI"/>}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6">MBTI 질문</Typography>
                    {mbti.questions.map((question, index) => {
                            return <QuestionCard
                                key={question.seq}
                                seq={question.seq}
                                question={question.question}
                                index={index}/>;
                        }
                    )}
                </Grid>
                <Grid item xs={12}>

                    <Typography variant="h6">
                        추가 코멘트를 남겨주세요.[선택] (<span>{inputCount}</span>/300자)
                    </Typography>
                    <TextField
                        multiline
                        fullWidth
                        maxRows={5}
                        minRows={5}
                        name={SET_MBTI_COMMENT}
                        value={mbti.comment}
                        onChange={handleOnchangeInput}
                        error={inputCount > 300}
                        placeholder="저희에게 남겨주실 말이나 질문에 대한 내용 어떠한 것이라도 좋습니다.  자유롭게 남겨주시면 감사하겠습니다."
                        helperText={inputCount > 300 ? "300자 미만 작성해주세요." : null}
                        sx={{whiteSpace:"pre-line"}}

                    />
                </Grid>
                <Grid item xs={12}>
                    <CompleteButtonSize1 callApi={CallPostMBTIQuestionAPI}/>
                </Grid>
            </Grid>


        </>
    );
}

export default MbtiTest;