import QuestionCard from "../components/cards/QuestionCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CallGetMBTIQuestionAPI, CallPostMBTIQuestionAPI} from "../apis/MbtiAPICalls";
import Typography from "@mui/material/Typography";
import CompleteButtonSize1 from "../components/buttons/CompleteButtonSize1";

const MbtiTest = () => {
    const mbti = useSelector((state) => state.mbtiReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallGetMBTIQuestionAPI())
    }, [])
    return (
        <>
            <Typography>
                MBTI 테스트
            </Typography>
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