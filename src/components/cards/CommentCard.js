import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import {SET_MBTI_COMMENT} from "../../modules/MbtiReducer";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import CompleteButtonSize1 from "../buttons/CompleteButtonSize1";
import {CallPostMBTIQuestionAPI} from "../../apis/MbtiAPICalls";

export default () => {
    const mbti = useSelector(state => state.mbtiReducer);
    const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(0);

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
        <Grid2 container justifyContent={"center"} flexDirection={"column"} rowSpacing={4}>
            <Grid2 xs={12} display={"flex"}
                   minHeight={200}
                   textAlign={"center"}
                   justifyContent={"center"}
                   alignItems={"center"}
            >
                <Typography variant={"h4"}>
                    하면서 이상했던 점이나 추가됐으면 하는점을 적어주세요.[선택]<br/> (<span>{inputCount}</span>/300자)
                </Typography>
            </Grid2>
            <Grid2 xs={12}>
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
            </Grid2>
            <Grid2 xs = {12}>
                <CompleteButtonSize1 callApi={CallPostMBTIQuestionAPI} resultUrl={"./result"}/>
            </Grid2>
        </Grid2>
    )
        ;
}