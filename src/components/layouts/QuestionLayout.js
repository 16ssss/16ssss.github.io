import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import QuestionHeader from "../features/headers/QuestionHeader";
import QuestionFooter from "../features/footers/QuestionFooter";
import Box from "@mui/material/Box";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CallGetMBTIQuestionAPI} from "../../services/apis/mbtiAPICalls";
import UnlikeModal from "../features/dialogs/UnlikeDialog";

export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (mbti.id === "") dispatch(CallGetMBTIQuestionAPI());
    }, [])
    return (
        <>
            <Container maxWidth="sm"
                       sx={{height: "100%", display: "flex", flexDirection: "column", minHeight: "100vh"}}>
                <QuestionHeader/>
                <Box flex="1" flexShrink="0">
                    <Outlet/>
                </Box>
                <QuestionFooter/>
            </Container>
            <UnlikeModal/>
        </>
    )
}