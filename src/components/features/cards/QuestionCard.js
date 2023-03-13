import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuestionButtonCard from "./AnswerRadioButtonCard";
import {useMediaQuery, useTheme} from "@mui/material";
import FloationButton from "../buttons/FloationUnLikeButton";

export default ({question, choice, index, isUnlike}) => {
    const theme = useTheme();
    const fontSize = useMediaQuery(theme.breakpoints.up('sm')) ? 30 : 20;
    return (
        <Box boxSizing="border-box">
            <Box minHeight={100} display="flex" alignItems="center" padding={2} position="relative">
                <Typography align="center"
                            fontSize={fontSize}
                            fontWeight="lighter"
                            sx={{width: "100%"}}
                >
                    {question.question}
                </Typography>
                <Box position="absolute" bottom={-20} right={0}>
                    <FloationButton index={index} value={isUnlike} seq={question.seq}/>
                </Box>
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