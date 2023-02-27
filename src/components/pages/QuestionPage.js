import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {useMediaQuery, useTheme} from "@mui/material";
import QuestionCard from "../features/cards/QuestionCard";
import Box from "@mui/material/Box";
import QuestionTextField from "../features/cards/TextFieldCard";
import {useNavigate} from "react-router-dom";
import {HANDLE_ON_MOUSE_OVER} from "../../services/reduces/hoverReducer";

export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const step = useSelector(s => s.stepReducer);
    const nodeRef = useRef(null);
    const theme = useTheme();
    const width = useMediaQuery(theme.breakpoints.up('sm')) ? 552 : window.innerWidth - 32;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        mbti.id === "" && navigate("/");
        dispatch({type: HANDLE_ON_MOUSE_OVER, payload: ""});
    })

    useEffect(() => {
        window.scrollTo(0, 0);
        (nodeRef.current.style.transform = `translateX(-${width * step.now}px)`);
    }, [step]);
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
                     width: `${width}px`,
                     transition: `${theme.transitions.duration.standard / 1000}s ease-in-out`
                 }}
            >
                {mbti.questions?.map((q, i) => {
                    return (
                        <Box key={`box${i}`} width={width} sx={{flexShrink: 0}} marginTop={3}>
                            <QuestionCard question={q}
                                          choice={mbti.choices[i].choice}
                                          index={i}
                            />
                        </Box>

                    );
                })}
                <Box key={`box${29}`} width={width} sx={{flexShrink: 0}} marginTop={3}>
                    <QuestionTextField/>
                </Box>
            </Box>
        </Box>

    );
}