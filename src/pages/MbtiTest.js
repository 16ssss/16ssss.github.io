import QuestionCard from "../components/cards/QuestionCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CallGetMBTIQuestionAPI, CallPostMBTIQuestionAPI} from "../apis/MbtiAPICalls";
import Typography from "@mui/material/Typography";
import CompleteButtonSize1 from "../components/buttons/CompleteButtonSize1";
import {Autocomplete, Grid, TextField} from "@mui/material";
import {SET_MBTI_COMMENT, SET_MBTI_RESULT, SET_MBTI_USERNAME} from "../modules/MbtiReducer";
import {useNavigate} from "react-router-dom";

const mbtiList = ["ESTP", "ESTJ", "ESFP", "ESFJ", "ENFP", "ENFJ", "ENTP", "ENTJ", "ISTP", "ISTJ", "ISFP", "ISFJ", "INFP", "INFJ", "INTP", "INTJ"];

const MbtiTest = () => {
    const mbti = useSelector((state) => state.mbtiReducer)
    const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(0);
    // console.log(mbti);
    useEffect(() => {
        mbti.questions.length <= 1 && dispatch(CallGetMBTIQuestionAPI());
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
                    <Typography variant="h6">성함</Typography>
                    <TextField
                        fullWidth
                        label=""
                        placeholder="성함을 작성해주세요!"
                        name={SET_MBTI_USERNAME}
                        onChange={handleOnchangeDispatch}
                        value={mbti.username}
                    ></TextField>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="h6">예상 MBTI</Typography>
                    <Autocomplete
                        disablePortal
                        fullWidth
                        id="combo-box-demo"
                        options={mbtiList}
                        sx={{marginBottom: '1vmax'}}
                        onChange={handleOnchangeAutocomplete}
                        value={mbti.result || null}
                        renderInput={(params) => <TextField {...params} placeholder="MBTI" helperText="이전에 검사한 결과 혹은 예상하는 결과를 적어주세요"/>}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6">MBTI 질문</Typography>
                    {mbti.questions.map((question, index) => {
                        return <QuestionCard
                                key={question.seq}
                                seq={question.seq}
                                question={question.question}
                                index={index}
                        />;
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
                    <CompleteButtonSize1 callApi={CallPostMBTIQuestionAPI} resultUrl = "./result"/>
                </Grid>
            </Grid>


        </>
    );
}

export default MbtiTest;