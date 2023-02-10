import {Autocomplete, TextField} from "@mui/material";
import {SET_MBTI_RESULT} from "../../modules/MbtiReducer";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";

const mbtiList = ["ESTP", "ESTJ", "ESFP", "ESFJ", "ENFP", "ENFJ", "ENTP", "ENTJ", "ISTP", "ISTJ", "ISFP", "ISFJ", "INFP", "INFJ", "INTP", "INTJ"];

export default () => {
    const mbti = useSelector((state) => state.mbtiReducer)
    const dispatch = useDispatch();
    const handleOnchangeAutocomplete = (e, newValue) => {
        dispatch({type: SET_MBTI_RESULT, payload: newValue});
    }
    return (
        <>
            <Typography variant="h6"
                        align={"center"}
            >
                MBTI
            </Typography>
            <Autocomplete
                disablePortal
                fullWidth
                id="combo-box-demo"
                options={mbtiList}
                sx={{marginBottom: '1vmax'}}
                onChange={handleOnchangeAutocomplete}
                value={mbti.result || null}
                renderInput={(params) => <
                    TextField {...params} placeholder="MBTI" helperText="이전에 검사한 결과 혹은 예상하는 결과를 적어주세요!"
                    />
                }
            />
        </>
    );
}