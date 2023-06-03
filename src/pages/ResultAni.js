import * as React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

export default ({type, handleOnEnded}) => {
    return (
        <>

            <Grid2 container rowGap={1}>
                <Grid2 xs={12}>
                    <Typography variant="h2" color="primary" align="center">
                        Ur MBTI
                    </Typography>
                </Grid2>
                <Grid2 xs={12}>
                    <video autoPlay
                           playsInline={true}
                           preload="auto"
                           muted
                           width="100%"
                           onEnded={handleOnEnded}
                    >
                        <source src={process.env.PUBLIC_URL + `/characters/${type.toLowerCase()}.webm`}
                                type={"video/webm"}/>
                    </video>
                </Grid2>
            </Grid2>
        </>
    );
}