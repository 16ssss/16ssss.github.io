import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import QuestionFooter from "../features/footers/QuestionFooter";

export default () => {
    return (
        <>
            <Container maxWidth="sm" sx={{height: "100%"}}>
                <Outlet/>
                <QuestionFooter/>
            </Container>
        </>
    );
}