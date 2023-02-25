import {Outlet} from "react-router-dom";
import {Container, Stack} from "@mui/material";
import QuestionHeader from "../features/headers/QuestionHeader";
import QuestionFooter from "../features/footers/QuestionFooter";
import Box from "@mui/material/Box";

export default () => {
    return (
        <Container maxWidth="sm">
            <QuestionHeader/>
            <Outlet/>
            <QuestionFooter/>
        </Container>
    )
}