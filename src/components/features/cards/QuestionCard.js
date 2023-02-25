import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuestionButtonCard from "./AnswerRadioButtonCard";
import {useMediaQuery, useTheme} from "@mui/material";

export default ({question, choice, index}) => {
    const theme = useTheme();
    const fontSize = useMediaQuery(theme.breakpoints.up('sm')) ? 30 : 20;
    return (
        <Box boxSizing="border-box">
            <Box minHeight={100}>
                <Typography align="center" paddingLeft={2} paddingRight={2} fontSize={fontSize} fontWeight="lighter">
                    {question.question}
                </Typography>
            </Box>
            <Box>
                <QuestionButtonCard question={question}
                                    choice={choice}
                                    index={index}

                />
            </Box>
        </Box>
    );
}