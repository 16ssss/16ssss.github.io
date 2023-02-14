import {useParams} from "react-router-dom";
import QuestionCardV2 from "../../components/cards/QuestionCardV2";
import CommentCard from "../../components/cards/CommentCard";
import QuestionCard from "../../components/cards/QuestionCard";
import {useSelector} from "react-redux";

export default () => {
    const {step} = useParams();
    const {questions, choices} = useSelector(s => s.mbtiReducer);
    const question = questions[step];
    const choice = choices[step];
    console.log(Math.round(Math.random() * 1.9));
    const randomElement = [
        <QuestionCardV2/>,
        <QuestionCard
            key={question.seq}
            seq={question.seq}
            question={question.question}
            index={step}
            value={choices[step]?.choice}
        />]
    return(
        <>
            {step < 28 ?
                randomElement[Math.round(Math.random())]
            :
                <CommentCard/>
            }
        </>
    );
}