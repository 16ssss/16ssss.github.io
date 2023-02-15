import {FormControlLabel} from "@mui/material";
import Radio from "@mui/material/Radio";
import {useDispatch} from "react-redux";
import {SET_MBTI_CHOICE} from "../../modules/MbtiReducer";
import {NEXT_STEPPER} from "../../modules/StepperReducer";
import {useState} from "react";
import {debounce} from "lodash";
import {styled} from "@mui/material/styles";


export default function RadioButtonSize1({label, group, value, key, seq, checked, size}) {
    const dispatch = useDispatch();
    const handleOnClick = debounce((e) => {
        dispatch({type: SET_MBTI_CHOICE, payload: {seq: seq, index: group, choice: e.target.value}});
        return dispatch({type: NEXT_STEPPER});
    }, 200);

    return (
        <>
            <FormControlLabel control={<Radio color="primary"
                                              sx={{
                                                  '& .MuiSvgIcon-root': {
                                                      fontSize: size,
                                                  },
                                              }}
                                       />}
                              value={value}
                              label={label}
                              key={key}
                              labelPlacement="bottom"
                              onClick={handleOnClick}
                              checked={checked}
                              sx={{textAlign: "center", display: "flex", margin: "0"}}

            />
        </>
    );
};