import {Card, Container} from "@mui/material";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import Grid2 from "@mui/material/Unstable_Grid2";
import StepperMUI from "../../components/steppers/TopStepperMUI";
import InnerStepper from "../../components/steppers/InnerStepper";
import QuestionCardV2 from "../../components/cards/QuestionCardV2";

export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const step = useSelector(s => s.stepperReducer);
    return (
        <Container
            sx={{
                display: "flex",
                flexWrap: "nowrap",
                overflow: "hidden",
                marginLeft: "0",
                boxSizing: "border-box"
            }}
        >
            {mbti.questions?.map((q, i) => {
                return (
                    <Card variant={"outlined"} sx={{flexShrink: "0"}}>
                        <Grid2 container minHeight={400} alignContent={"start"}>
                            <Grid2 xs={12}>
                                <StepperMUI step={i}/>
                            </Grid2>
                            <Grid2 xs={12}>
                                <InnerStepper step={i} choice={mbti.choices[i]?.choice}/>
                            </Grid2>
                            <Grid2 xs={12}>
                                <QuestionCardV2 step={i} choice={mbti.choices[i]?.choice}
                                                question={q.question} seq={q.seq}/>
                            </Grid2>
                        </Grid2>
                    </Card>
                );
            })}
        </Container>
    );
}