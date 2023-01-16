import QuestionCard from "../components/cards/QuestionCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CallGetMBTIQuestionAPI, CallPostMBTIQuestionAPI} from "../apis/MbtiAPICalls";
import Typography from "@mui/material/Typography";
import CompleteButtonSize1 from "../components/buttons/CompleteButtonSize1";
import {Autocomplete, TextField} from "@mui/material";
import {SET_MBTI_ANSWER, SET_MBTI_RESULT} from "../modules/MbtiReducer";

const mbtiList = ["ESTP", "ESTJ", "ESFP", "ESFJ", "ENFP", "ENFJ", "ENTP", "ENTJ", "ISTP", "ISTJ", "ISFP", "ISFJ", "INFP", "INFJ", "INTP", "INTJ"];

const MbtiTest = () => {
    const mbti = useSelector((state) => state.mbtiReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallGetMBTIQuestionAPI())
    }, [])

    const handleOnchange = (e, newValue) => {
        dispatch({type: SET_MBTI_RESULT, payload: newValue});
    }
    return (
        <>
            <Typography variant="h2" textAlign="center">
                MBTI 테스트
            </Typography>
            <Typography variant="h6">자신의 MBTI를 작성해주세요</Typography>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={mbtiList}
                sx={{ width: 300, marginBottom:'1vmax' }}
                onChange={handleOnchange}
                renderInput={(params) => <TextField {...params} label="MBTI" />}
            />
            {mbti.questions.map((question, index) => {
                return <QuestionCard
                    key ={question.itemNo}
                    itemNo={question.itemNo}
                    detail={question.details}
                    index={index}/>;

            })}
            <CompleteButtonSize1 callApi={CallPostMBTIQuestionAPI}/>
        </>
    );
}

export default MbtiTest;