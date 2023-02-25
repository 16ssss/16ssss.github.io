import {Chip, FormControl, RadioGroup, Stack, useMediaQuery, useTheme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import RadioButton from "../buttons/RadioButton";
import * as React from "react";

export default ({question, choice, index}) => {
    const {leftPhrase, rightPhrase, seq} = question;
    const theme = useTheme();
    const fontSize = useMediaQuery(theme.breakpoints.up('sm')) ? 15 : 13;

    return (
        <Grid2 container marginTop={3}>
            <Grid2 xs={12}>
                <Chip label={leftPhrase} color="primary"
                      variant={choice < 0 ? "filled" : "outlined"}
                      size="medium"
                      sx={{border: 0, fontSize:fontSize}}
                />
            </Grid2>
            <FormControl fullWidth>
                {/*<FormLabel id="mbti-radio">응답</FormLabel>*/}
                <RadioGroup
                    row
                    // aria-labelledby="demo-row-radio-buttons-group-label"
                    name="mbti-test-radio-group"
                >
                    <Stack width="100%" flexDirection="row" justifyContent="space-between">
                        <RadioButton seq={seq} group={index}
                                     value="-3"
                                     checked={choice === "-3"}
                                     size={35}
                        />
                        <RadioButton seq={seq} group={index}
                                     value="-1"
                                     checked={choice === "-1"}
                                     size={30}
                        />
                        <RadioButton seq={seq} group={index}
                                     value="0"
                                     checked={choice === "0"}
                                     size={25}
                        />
                        <RadioButton seq={seq} group={index}
                                     value="1"
                                     checked={choice === "1"}
                                     size={30}
                        />
                        <RadioButton seq={seq} group={index}
                                     value="3"
                                     checked={choice === "3"}
                                     size={35}
                        />
                    </Stack>
                </RadioGroup>
            </FormControl>
            <Grid2 xs={12} display="flex" justifyContent="flex-end">
                <Chip label={rightPhrase} color="secondary"
                      variant={choice > 0 ? "filled" : "outlined"}
                      size="medium"
                      sx={{border: 0, fontSize:fontSize}}
                />
            </Grid2>
        </Grid2>
    );
}