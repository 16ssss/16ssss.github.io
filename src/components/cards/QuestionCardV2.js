import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import QuestionButton from "../buttons/QuestionButton";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default () => {
    let {step} = useParams();
    const {questions, choices} = useSelector(s => s.mbtiReducer);
    const question = questions[step];
    const choice = choices[step];
    // const mbti = useSelector(s => s.mbtiReducer);
    // const step = useSelector(s => s.stepperReducer);
    return (
        <Grid2 container={true}>
            <Grid2 xs={12}>
                <Box display={"flex"}
                     minHeight={200}
                     textAlign={"center"}
                     justifyContent={"center"}
                     alignItems={"center"}
                >
                    <Typography variant={"h4"}>
                        {question.question}
                    </Typography>
                </Box>
            </Grid2>
            <Grid2 xs={12}>
                <QuestionButton question={question} step={step} choice={choice.choice}/>
            </Grid2>
        </Grid2>
    );
}