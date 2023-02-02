import * as React from 'react';
import {Card, Divider, FormControl, Grid, RadioGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
import RadioButtonSize1 from "../buttons/RadioButtonSize1";

export default function QuestionCard({question, seq, index, value}) {
    return (
        <Card sx={{marginBottom: '2vmax', minHeight: '200px'}}>
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="stretch"
                  rowSpacing={4}
                  paddingTop={4}
                  paddingBottom={4}
            >
                <Grid item xs={12}>
                    <Typography
                        paddingLeft={4}
                        paddingRight={4}
                        fontSize={18}
                        sx={{whiteSpace: "pre-line"}}
                    >
                        {index + 1}번) {question}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
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
                            >
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label={["매우", <br key={seq}/>, "그렇다"]} seq={seq} group={index}
                                                      value="3"
                                                      checked={value === "3"}
                                    />
                                </Grid>
                                <Divider orientation="vertical"/>
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label="그렇다" seq={seq} group={index} value="1"
                                                      checked={value === "1"}
                                    />
                                </Grid>
                                <Divider orientation="vertical"/>
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label="보통" seq={seq} group={index} value="0"
                                                      checked={value === "0"}
                                    />
                                </Grid>
                                <Divider orientation="vertical"/>
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label="아니다" seq={seq} group={index} value="-1"
                                                      checked={value === "-1"}
                                    />

                                </Grid>
                                <Divider orientation="vertical"/>
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label={["매우", <br key={seq}/>, "아니다"]} seq={seq} group={index}
                                                      checked={value === "-3"}
                                                      value="-3"/>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Card>
    );
};


