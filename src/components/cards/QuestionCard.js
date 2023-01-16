import * as React from 'react';
import {Card, FormControl, Grid, RadioGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
import RadioButtonSize1 from "../buttons/RadioButtonSize1";

export default function QuestionCard({detail, itemNo, index}) {
    return (
        <Card style={{padding: '0px', marginBottom: '2vmax', minHeight: '200px'}}>
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="stretch"
                  rowSpacing={4}
            >
                <Grid item xs={12}>
                    <Typography paddingLeft="3vmax"
                                paddingTop="3vmax"
                                paddingRight="3vmax"
                                style={{marginBottom: '20px', whiteSpace: "pre-line"}}
                    >
                        {index + 1}번. {detail}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        {/*<FormLabel id="mbti-radio">응답</FormLabel>*/}
                        <RadioGroup
                            row
                            // aria-labelledby="demo-row-radio-buttons-group-label"
                            name="radio-group"
                            sx={{flexWrap: "nowrap"}}
                        >
                            <Grid container
                                  columns={10}
                                  justifyItems="center"
                            >
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label="매우아니다" group={itemNo} value="1"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label="아니다" group={itemNo} value="2"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label="보통" group={itemNo} value="3"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label="그렇다" group={itemNo} value="4"/>
                                </Grid>
                                <Grid item xs={2}>
                                    <RadioButtonSize1 label="매우그렇다" group={itemNo} value="5"/>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Card>
    );
};


