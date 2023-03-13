import {Fab} from "@mui/material";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import {useDispatch} from "react-redux";
import {TOGGLE_UNLIKE_MBTI_TEST} from "../../../services/reduces/mbtiReducer";

export default ({index, value, seq}) => {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch({type: TOGGLE_UNLIKE_MBTI_TEST, payload: {index: index, seq: seq}});
        console.log(value);
    };
    return (
        <Fab size="small"
             color={value ? "secondary" : "grey"}
             aria-label="unlike"
             sx={{boxShadow: "none", width: 30, height: 30, minHeight: 0, "&:hover": {boxShadow: "none"}}}
        >
            <ThumbDownAltIcon onClick={handleOnClick} fontSize="small"/>
        </Fab>
    );
}