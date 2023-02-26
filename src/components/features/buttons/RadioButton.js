import {FormControlLabel} from "@mui/material";
import Radio from "@mui/material/Radio";
import {useDispatch} from "react-redux";
import {SET_MBTI_CHOICE} from "../../../services/reduces/mbtiReducer";
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {NEXT_STEP} from "../../../services/reduces/stepReducer";
import {debounce} from "lodash";
import {HANDLE_ON_MOUSE_OVER} from "../../../services/reduces/hoverReducer";
// const StyledRadio = styled(Radio)(({theme}) => ({
//     '& .MuiSvgIcon-root': {
//         fontSize: useMediaQuery(theme.breakpoints.up('sm')) ? "40px" : "30px",
//         strokeWidth: 10,
//         strokeMiterlimit: 10,
//     },
// }));
export default ({label, group, value, seq, checked, size, color}) => {
    const dispatch = useDispatch();
    const handleOnclick = debounce(async (e) => {
        dispatch({type: SET_MBTI_CHOICE, payload: {seq: seq, index: group, choice: e.target.value}});
        dispatch({type: NEXT_STEP});
    }, 150);
    return (
        <>
            <FormControlLabel control={<Radio
                icon={<CircleOutlinedIcon color={color}/>}
                checkedIcon={<CircleIcon color={color}/>}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: size,
                    }
                }}
            />}
                              value={value}
                              onClick={handleOnclick}
                              checked={checked}
                              sx={{textAlign: "center", display: "flex", margin: "0"}}
                              onMouseOver={() => dispatch({type:HANDLE_ON_MOUSE_OVER, payload: +value <= -1 ? "left" : +value === 0 ? "" : "right"})}
                              onMouseOut={() => dispatch({type:HANDLE_ON_MOUSE_OVER, payload: ""})}
            />
        </>
    );
};