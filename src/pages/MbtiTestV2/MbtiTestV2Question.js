import {useSelector} from "react-redux";
import CommentCard from "../../components/cards/CommentCard";
import QuestionCardV2 from "../../components/cards/QuestionCardV2";
import Grid2 from "@mui/material/Unstable_Grid2";
import StepperMUI from "../../components/steppers/TopStepperMUI";
import InnerStepper from "../../components/steppers/InnerStepper";
import {Card} from "@mui/material";
import {Fade} from "react-awesome-reveal";
import {useState} from "react";

export default () => {
    const mbti = useSelector(state => state.mbtiReducer);
    const step = useSelector(s => s.stepperReducer);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [stepperReducer]);2
    const [d, setD] = useState("right");

    return (
        <Card variant={"outlined"}>
            <Grid2 container minHeight={400} alignContent={"start"}>
                <Grid2 xs={12}>
                    <StepperMUI step={step}/>
                </Grid2>
                <Grid2 xs={12}>
                    <InnerStepper step={step}/>
                </Grid2>
                <Grid2 xs={12}>
                    {
                        step < 28 ?
                            <QuestionCardV2 step={step} question={mbti.questions[step]?.question}
                                            seq={mbti.questions[step]?.seq} choice={mbti.choices[step]?.choice}/>
                            :
                            <CommentCard/>
                    }
                </Grid2>
            </Grid2>
        </Card>
    );

}