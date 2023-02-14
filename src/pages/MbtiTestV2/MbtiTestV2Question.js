import {useSelector} from "react-redux";
import CommentCard from "../../components/cards/CommentCard";
import QuestionCardV2 from "../../components/cards/QuestionCardV2";
import Grid2 from "@mui/material/Unstable_Grid2";
import StepperMUI from "../../components/steppers/TopStepperMUI";
import InnerStepper from "../../components/steppers/InnerStepper";
import {Card} from "@mui/material";
import "./MbtiTestV2Question.css"
import {cloneElement, createRef, useEffect} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useLocation, useParams} from "react-router-dom";

export default () => {
    const step = useParams();
    console.log(step);

    const {mbtiReducer, stepperReducer, slideDirectionReducer} = useSelector(state => state);
    const nodeRef = createRef(null);
    // console.log(mbtiReducer.questions[stepperReducer]);
    // console.log(stepperReducer);
    const question = mbtiReducer.questions[stepperReducer];
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [stepperReducer]);

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [stepperReducer]);
    console.log(slideDirectionReducer.slideDirection);

    return (
        // <Slide direction={slideDirectionReducer.slideDirection} in={slideDirectionReducer.power} container={containerRef.current}>
        <TransitionGroup
            childFactory={child => {
                return cloneElement(child, {
                    classNames: slideDirectionReducer.slideDirection
                });
            }}
        >
            <CSSTransition
                key={stepperReducer}
                nodeRef={nodeRef}
                timeout={500}
                // classNames={slideDirectionReducer.slideDirection}
                classNames="left"
            >
                <Card variant={"outlined"} ref={nodeRef}>
                    <Grid2 container minHeight={400} alignContent={"start"}>
                        <Grid2 xs={12}>
                            <StepperMUI/>
                        </Grid2>
                        <Grid2 xs={12}>
                            <InnerStepper/>
                        </Grid2>
                        <Grid2 xs={12}>
                            {
                                stepperReducer < 28 ?
                                    <QuestionCardV2/>
                                    :
                                    <CommentCard/>
                            }
                        </Grid2>
                    </Grid2>
                </Card>
             </CSSTransition>
         </TransitionGroup>
        // </Slide>

    );

}