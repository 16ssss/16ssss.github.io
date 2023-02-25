import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import QuestionHeader from "../features/headers/QuestionHeader";
import QuestionFooter from "../features/footers/QuestionFooter";

export default () => {
    return (
        <Container maxWidth="sm" >
            <QuestionHeader/>
            <Outlet/>
            <QuestionFooter/>
        </Container>
    )
}