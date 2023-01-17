import {FormControlLabel} from "@mui/material";
import Radio from "@mui/material/Radio";
import {useDispatch} from "react-redux";
import {SET_MBTI_CHOICE} from "../../modules/MbtiReducer";

export default function RadioButtonSize1({label, group, value, key}) {
    const dispatch = useDispatch();
    const handleOnchange = (e) => {
        dispatch({type: SET_MBTI_CHOICE, payload: {seq: group, choice: e.target.value}});
    }

    return (
        <>
            <FormControlLabel control={<Radio/>}
                              value={value}
                              label={label}
                              key={key}
                              labelPlacement="bottom"
                              onChange={handleOnchange}
                              sx={{textAlign:"center", display: "flex", margin:"0"}}

            />
        </>
    );
};