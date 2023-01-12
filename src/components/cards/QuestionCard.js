import * as React from 'react';
import Radio from '@mui/material/Radio';
import {Card, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {SET_MBTI_ANSWER} from "../../modules/MbtiReducer";

export default function QuestionCard({detail, itemNo, index}) {
    const answer = useSelector(state => state.mbtiReducer);
    const dispatch = useDispatch();
    const handleOnchange = (e) => {
        dispatch({type: SET_MBTI_ANSWER, payload: {itemNo: itemNo, answer: e.target.value}});
    }

    return (
        <Card style={{padding: '20px', margin: '10px', height: '200px'}}>
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="stretch" height='100%'
            >
                <Grid item xs={12}>
                    <Typography style={{marginBottom: '20px', whiteSpace: "pre-line"}}>
                        {index + 1}. {detail}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="mbti-radio">응답</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <Stack
                                flex
                                flexDirection="row"
                            >
                                <FormControlLabel
                                    value="1"
                                    control={<Radio/>}
                                    label="매우 아니다"
                                    labelPlacement="bottom"
                                    onChange={handleOnchange}
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<Radio/>}
                                    label="아니다"
                                    labelPlacement="bottom"
                                    onChange={handleOnchange}

                                />
                                <FormControlLabel
                                    value="3"
                                    control={<Radio/>}
                                    label="보통"
                                    labelPlacement="bottom"
                                    onChange={handleOnchange}

                                />
                                <FormControlLabel
                                    value="4"
                                    control={<Radio/>}
                                    label="그렇다"
                                    labelPlacement="bottom"
                                    onChange={handleOnchange}
                                />
                                <FormControlLabel
                                    value="5"
                                    control={<Radio/>}
                                    label="매우 그렇다"
                                    labelPlacement="bottom"
                                    onChange={handleOnchange}
                                />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Card>
    );
};


