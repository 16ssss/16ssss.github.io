import {Chip, FormControl, RadioGroup, Stack, useMediaQuery, useTheme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import RadioButton from "../buttons/RadioButton";
import * as React from "react";
import {useSelector} from "react-redux";

export default ({question, choice, index}) => {
    const {leftPhrase, rightPhrase, seq} = question;
    const theme = useTheme();
    const fontSize = useMediaQuery(theme.breakpoints.up('sm')) ? 15 : 13;
    const hover = useSelector(s => s.hoverReducer);
    return (
        <Grid2 container marginTop={3} rowGap={1.5}>
            <Grid2 xs={12}>
                <Chip label={leftPhrase} color="primary"
                      variant={choice < 0 || hover === "left" ? "filled" : "outlined"}
                      size="medium"
                      sx={{
                          fontSize: hover === "left" ? fontSize + 5 : fontSize,
                          transition: `font-size ${theme.transitions.duration.standard / 1000}s`
                      }}

                />
            </Grid2>
            <FormControl fullWidth>
                {/*<FormLabel id="mbti-radio">응답</FormLabel>*/}
                <RadioGroup
                    row
                    // aria-labelledby="demo-row-radio-buttons-group-label"
                    name="umi-test-radio-group"
                >
                    <Stack width="100%" flexDirection="row" justifyContent="space-between">
                        <RadioButton seq={seq} group={index}
                                     value="-3"
                                     checked={choice === "-3"}
                                     size={40}
                                     color="primary"
                        />
                        <RadioButton seq={seq} group={index}
                                     value="-1"
                                     checked={choice === "-1"}
                                     size={30}
                                     color="primary"
                        />
                        <RadioButton seq={seq} group={index}
                                     value="0"
                                     checked={choice === "0"}
                                     size={25}
                                     color="grey"
                        />
                        <RadioButton seq={seq} group={index}
                                     value="1"
                                     checked={choice === "1"}
                                     size={30}
                                     color="secondary"
                        />
                        <RadioButton seq={seq} group={index}
                                     value="3"
                                     checked={choice === "3"}
                                     size={40}
                                     color="secondary"
                        />
                    </Stack>
                </RadioGroup>
            </FormControl>
            <Grid2 xs={12} display="flex" justifyContent="flex-end">
                <Chip label={rightPhrase} color="secondary"
                      variant={choice > 0 || hover === "right" ? "filled" : "outlined"}
                      size="medium"
                      sx={{
                          fontSize: hover === "right" ? fontSize + 5 : fontSize,
                          transition: `all ${theme.transitions.duration.standard / 1000}s`
                      }}
                />
            </Grid2>
        </Grid2>
    );
}