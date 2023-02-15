import {Divider, FormControl, Grid, RadioGroup} from "@mui/material";
import RadioButtonSize1 from "./RadioButtonSize1";
import * as React from "react";

export default ({seq, step, choice}) => {
    return (
        <FormControl fullWidth>
            {/*<FormLabel id="mbti-radio">응답</FormLabel>*/}
            <RadioGroup
                row
                // aria-labelledby="demo-row-radio-buttons-group-label"
                name="radio-group"
                sx={{flexWrap: "nowrap", padding: "2vmax"}}

            >
                <Grid container
                      justifyItems="center"
                      justifyContent="space-around"
                      alignContent="center"
                      alignItems="center"
                >
                    <Grid item xs={2}>
                        <RadioButtonSize1 label={["정말", <br key={seq}/>, "그렇다"]} seq={seq} group={step}
                                          value="3"
                                          checked={choice === "3"}
                                          size={100}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <RadioButtonSize1 label="그렇다" seq={seq} group={step} value="1"
                                          checked={choice === "1"}
                                          size={70}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <RadioButtonSize1 label="반반이다" seq={seq} group={step} value="0"
                                          checked={choice === "0"}
                                          size={50}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <RadioButtonSize1 label="아니다" seq={seq} group={step} value="-1"
                                          checked={choice === "-1"}
                                          size={70}
                        />

                    </Grid>
                    <Grid item xs={2}>
                        <RadioButtonSize1 label={["정말아니다", <br key={seq}/>, "아니다"]} seq={seq} group={step}
                                          checked={choice === "-3"}
                                          value="-3"
                                          size={100}
                        />
                    </Grid>
                </Grid>
            </RadioGroup>
        </FormControl>
    );
}