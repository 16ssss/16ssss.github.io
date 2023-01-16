import {FormControlLabel} from "@mui/material";
import Radio from "@mui/material/Radio";
import {useDispatch} from "react-redux";
import {SET_MBTI_ANSWER} from "../../modules/MbtiReducer";

export default function RadioButtonSize1({label, group, value}) {
    const dispatch = useDispatch();
    const handleOnchange = (e) => {
        dispatch({type: SET_MBTI_ANSWER, payload: {itemNo: group, answer: e.target.value}});
    }

    return (
        <>
            <FormControlLabel control={<Radio/>}
                              value={value}
                              label={label}
                              labelPlacement="bottom"
                              onChange={handleOnchange}
                              sx={{textAlign:"center", display: "flex", margin:"0", marginBottom:"2vmax"}}

            />
        </>
    );
};