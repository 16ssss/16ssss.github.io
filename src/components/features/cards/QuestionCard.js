import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuestionButtonCard from "./AnswerRadioButtonCard";
import {useMediaQuery, useTheme} from "@mui/material";

export default ({question, choice, index}) => {
    const theme = useTheme();
    const fontSize = useMediaQuery(theme.breakpoints.up('sm')) ? 30 : 20;
    return (
        <Box boxSizing="border-box">
            <Box minHeight={100} display="flex" alignItems="center" padding={2}>
                <Typography align="center"
                            fontSize={fontSize}
                            fontWeight="lighter"
                            sx={{width:"100%"}}
                >
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