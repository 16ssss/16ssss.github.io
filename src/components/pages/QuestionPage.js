import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import {CallGetMBTIQuestionAPI} from "../../services/apis/mbtiAPICalls";
import QuestionCard from "../features/cards/QuestionCard";
import Box from "@mui/material/Box";
import QuestionTextField from "../features/cards/TextFieldCard";


export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const step = useSelector(s => s.stepReducer);
    const nodeRef = useRef(null);
    const theme = useTheme();
    const width = useMediaQuery(theme.breakpoints.up('sm')) ? 552 : window.innerWidth - 32;
    const dispatch = useDispatch();
    // useEffect(() => {
    //     mbti.id === "" && dispatch(CallGetMBTIQuestionAPI());
    // }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        (nodeRef.current.style.transition = `${theme.transitions.duration.shorter / 1000}s ease-in-out`);
        (nodeRef.current.style.transform = `translateX(-${width * step.now}px)`);
    }, [step]);

    const sliderElementRender = () => {
        let slideElements = [];
        for (let i = 0; i < step.total; i++) {
            slideElements.push(
                <Box key={`box${i}`} width={width} sx={{flexShrink: 0}} marginTop={3}>
                    <QuestionCard question={mbti.questions[i]}
                                  choice={mbti.choices[i].choice}
                                  index={i}
                    />
                </Box>
            )
        }
        slideElements.push(
            <Box key={`box${29}`} width={width} sx={{flexShrink: 0}} marginTop={3}>
                <QuestionTextField/>
            </Box>
        )
        ;
        return slideElements;
    }
    return (
        <Box
            sx={{
                overflow: "hidden",
                width: `${width}px`,
            }}>
            <Box ref={nodeRef}
                 sx={{
                     display: "flex",
                     flexWrap: "nowrap",
                     width: `${width}px`
                 }}
            >
                {sliderElementRender()}
            </Box>
        </Box>

    );
}