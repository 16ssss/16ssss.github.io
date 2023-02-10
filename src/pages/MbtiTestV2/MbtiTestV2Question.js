import {useSelector} from "react-redux";
import CommentCard from "../../components/cards/CommentCard";
import QuestionCardV2 from "../../components/cards/QuestionCardV2";
import Grid2 from "@mui/material/Unstable_Grid2";
import StepperMUI from "../../components/steppers/TopStepperMUI";
import InnerStepper from "../../components/steppers/InnerStepper";
import {Card} from "@mui/material";

export default () => {
    const {mbtiReducer, stepperReducer} = useSelector(state => state);
    // console.log(mbtiReducer.questions[stepperReducer]);
    // console.log(stepperReducer);
    const question = mbtiReducer.questions[stepperReducer];
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [stepperReducer]);

    return (
        <Card variant={"outlined"}>
            <Grid2 container minHeight={400} alignContent={"start"} >
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
    );

}