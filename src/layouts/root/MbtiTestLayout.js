import {Outlet, useLocation, useParams} from 'react-router-dom';
import {Box, Card, Container} from '@mui/material';
import Footer from "../../components/footers/Footer";
import {cloneElement, useCallback, useEffect, useMemo, useRef, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import TopStepperMUI from "../../components/steppers/TopStepperMUI";
import InnerStepper from "../../components/steppers/InnerStepper";
import "./MbtiTestLayout.css";
import {styled} from "@mui/material/styles";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useSelector} from "react-redux";

const StyledCSSTransition = styled(CSSTransition)`
  ${({theme}) => `
  
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})};
  `}
`;

export default () => {
    const stepperReducer = +useSelector(s => s.stepperReducer);
    const [slideDirection, setSlideDirection] = useState({
        nowStep: 0, direction: "right"
    });
    const [, updateState] = useState();
    useMemo(() => {
        const newDirection = slideDirection.nowStep < stepperReducer ? "right" : "left";
        setSlideDirection({nowStep: stepperReducer, direction: newDirection})
    }, [stepperReducer])
    const {step} = useParams();
    const nodeRef = useRef(null);
    return (<>
        <Container>
            <Box display='flex'
                 minHeight='80vh'
                 flexDirection='column'
                 marginTop={2}
                 boxSizing="border-box">
                <SwitchTransition mode={"out-in"}
                                  childFactory={child => {
                                      return cloneElement(child, {
                                          classNames: slideDirection.direction
                                      });
                                  }}
                >
                    <StyledCSSTransition
                        key={window.location.pathname}
                        timeout={300}
                        classNames={slideDirection.direction}
                        // addEndListener={(done) => {
                        //     nodeRef.current.addEventListener("transitionend", done, false);
                        // }}
                    >
                        <Card variant={"outlined"}>
                            <Grid2 container minHeight={400} flexDirection={"column"} alignItems={"center"}>
                                <Grid2 xs={12}>
                                    <TopStepperMUI step={step}/>
                                </Grid2>
                                <Grid2 xs={12}>
                                    <InnerStepper step={step}/>
                                </Grid2>
                                <Grid2 xs={12} maxWidth={1100} paddingLeft={2} paddingRight={2}>
                                    <Outlet/>
                                </Grid2>
                            </Grid2>
                        </Card>
                    </StyledCSSTransition>
                </SwitchTransition>
            </Box>
        </Container>
        <Footer/>
    </>)
}