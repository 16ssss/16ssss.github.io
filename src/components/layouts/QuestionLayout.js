import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import QuestionHeader from "../features/headers/QuestionHeader";

export default () => {
    return (
        <Container maxWidth="sm" >
            <QuestionHeader/>
            <Outlet/>
        </Container>
    )
}