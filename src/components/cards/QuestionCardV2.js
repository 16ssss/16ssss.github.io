import Grid2 from "@mui/material/Unstable_Grid2";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import QuestionButton from "../buttons/QuestionButton";

export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const step = useSelector(s => s.stepperReducer);
    console.log(mbti.choices[step])
    return (
        <Grid2 container={true}>
            <Grid2 xs={12}>
                <Box display={"flex"}
                     minHeight={200}
                     textAlign={"center"}
                     justifyContent={"center"}
                     alignItems={"center"}
                >
                    <Typography fontSize="2rem" padding={5}>
                        {mbti.questions[step].question}
                    </Typography>
                </Box>
            </Grid2>
            <Grid2 xs={12}>
                <QuestionButton question={mbti.questions[step]} step={step} choice={mbti.choices[step].choice}/>
            </Grid2>
        </Grid2>
    );
}