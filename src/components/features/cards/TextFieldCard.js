import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {SET_MBTI_COMMENT} from "../../../services/reduces/mbtiReducer";
import {Button, TextField} from "@mui/material";
import {CallPostMBTIQuestionAPI} from "../../../services/apis/mbtiAPICalls";
import {useNavigate} from "react-router-dom";

export default () => {
    const mbti = useSelector((state) => state.mbtiReducer)
    const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(0);
    const navigate = useNavigate();
    const handleOnchangeInput = (e) => {
        dispatch({type: SET_MBTI_COMMENT, payload: e.target.value})
        let len = 0;
        for (let i = 0; i < mbti.comment.length; i++) {
            if (escape(mbti.comment.charAt(i)).length == 6) {
                len++;
            }
            len++;
        }
        setInputCount(len);
        // setInputCount(e.target.value.replace(/[\sa-zA-Z0-9`~!@#$%^&*()_+-={}\[\];':",./<>?]/, "\n").length);
    };
    return (
        <>
            <Typography variant="h6">
                추가 코멘트를 남겨주세요.[선택] (<span>{inputCount}</span>/300자)
            </Typography>
            <TextField
                multiline
                fullWidth
                maxRows={5}
                minRows={5}
                name={SET_MBTI_COMMENT}
                // value={mbti.comment}
                onChange={handleOnchangeInput}
                error={inputCount > 300}
                placeholder="문항이 싫거나 이상한 이유를 적어주시면 많은 도움이 됩니다! &#13;&#10;감사합니다."
                helperText={inputCount > 300 ? "300자 미만 작성해주세요." : null}
                sx={{whiteSpace: "pre-line"}}
            />
            <Button fullWidth
                    variant="contained"
                    sx={{mt: 10}}
                    onClick={() => {
                        window.confirm("테스트를 완료할까?") && dispatch(CallPostMBTIQuestionAPI())
                            .then(res => {
                                res && navigate("/result");
                            });
                    }}
            > 완료 </Button>
        </>
    );
}