import Grid2 from "@mui/material/Unstable_Grid2";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import QuestionButton from "../buttons/QuestionButton";

export default ({question, choice, seq, step}) => {
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
                        {question}
                    </Typography>
                </Box>
            </Grid2>
            <Grid2 xs={12}>
                <QuestionButton seq={seq} step={step} choice={choice}/>
            </Grid2>
        </Grid2>
    );
}