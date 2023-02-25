import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";

export default () => {
    return (
        <>
            <Container maxWidth={"sm"}>
                <Outlet/>
            </Container>
        </>
    );
}