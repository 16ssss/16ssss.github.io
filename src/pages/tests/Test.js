import * as React from "react";
import {useEffect, useRef, useState} from "react";
import Box from "@mui/material/Box";

export default () => {
    return (
        <>
            {/*<img src={"/images/gif/umi_result.gif"}*/}
            {/*     ref={gif}*/}
            {/*     onAbort={() => {console.log('왜 안끝나냐구..')}}*/}
            {/*/>*/}
            <Box width="100%">
                <video autoPlay
                       onEnded={() => console.log("영상 끝났어!!!!")}
                       playsInline={true}
                       preload="auto"
                       muted
                       width="100%"
                >
                    <source src={process.env.PUBLIC_URL + "/videos/test.mp4"} type={"video/mp4"}/>
                </video>
            </Box>
        </>
    );
}