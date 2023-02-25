import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useRef} from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import {CallGetMBTIQuestionAPI} from "../../services/apis/mbtiAPICalls";
import QuestionCard from "../features/cards/QuestionCard";
import Box from "@mui/material/Box";


export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const step = useSelector(s => s.stepReducer);
    const nodeRef = useRef(null);
    const theme = useTheme();
    const width = useMediaQuery(theme.breakpoints.up('sm')) ? 552 : window.innerWidth - 32;;
    // const width = window.innerWidth - 32;
    const dispatch = useDispatch();
    useMemo(() => {
        mbti.id === "" && dispatch(CallGetMBTIQuestionAPI());
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        nodeRef.current.style.transition = `0.5s ease-in-out`;
        nodeRef.current.style.transform = `translateX(-${width * step.now}px)`;
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