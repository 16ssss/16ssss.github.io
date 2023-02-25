import {FormControlLabel, useMediaQuery} from "@mui/material";
import Radio from "@mui/material/Radio";
import {useDispatch} from "react-redux";
import {SET_MBTI_CHOICE} from "../../../services/reduces/mbtiReducer";
import {styled} from "@mui/material/styles";
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

// const StyledRadio = styled(Radio)(({theme}) => ({
//     '& .MuiSvgIcon-root': {
//         fontSize: useMediaQuery(theme.breakpoints.up('sm')) ? "40px" : "30px",
//         strokeWidth: 10,
//         strokeMiterlimit: 10,
//     },
// }));
export default ({label, group, value, seq, checked, size}) => {
    const dispatch = useDispatch();
    const handleOnchange = (e) => {
        dispatch({type: SET_MBTI_CHOICE, payload: {seq: seq, index: group, choice: e.target.value}});
    }

    return (
        <>
            <FormControlLabel control={<Radio icon={<CircleOutlinedIcon/>}
                                                    checkedIcon={<CircleIcon/>}
                                                    color={value > 0 ? "secondary" : value === "0" ? "grey" : "primary"}
                                                    sx={{'& .MuiSvgIcon-root': {
                                                            fontSize: size,
                                                    }}}
            />}
                              value={value}
                              onChange={handleOnchange}
                              checked={checked}
                              sx={{textAlign: "center", display: "flex", margin: "0"}}

            />
        </>
    );
};