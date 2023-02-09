import {useSelector} from "react-redux";
import CommentCard from "../../components/cards/CommentCard";
import QuestionCard from "../../components/cards/QuestionCard";
import Box from "@mui/material/Box";

export default () => {
    const {mbtiReducer, stepperReducer} = useSelector(state => state);
    // console.log(mbtiReducer.questions[stepperReducer]);
    // console.log(stepperReducer);
    const question = mbtiReducer.questions[stepperReducer];
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [stepperReducer]);

    return (
        <Box minHeight={400}>
            {
                stepperReducer < 28 ?
                    <QuestionCard
                        question={question.question}
                        seq={question.seq}
                        index={stepperReducer}
                        value={mbtiReducer.choices[stepperReducer].choice}
                    />
                    :
                    <CommentCard/>

            }
        </Box>
    );

}