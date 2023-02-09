import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import {SET_MBTI_COMMENT} from "../../modules/MbtiReducer";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default ({e}) => {
    const mbti = useSelector(state => state.mbtiReducer);
    const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(0);

    const handleOnchangeInput = (e) => {
        dispatch({type:SET_MBTI_COMMENT, payload: e.target.value})
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
                value={mbti.comment}
                onChange={handleOnchangeInput}
                error={inputCount > 300}
                placeholder="저희에게 남겨주실 말이나 질문에 대한 내용 어떠한 것이라도 좋습니다.  자유롭게 남겨주시면 감사하겠습니다."
                helperText={inputCount > 300 ? "300자 미만 작성해주세요." : null}
                sx={{whiteSpace: "pre-line"}}

            />
        </>
    )
        ;
}