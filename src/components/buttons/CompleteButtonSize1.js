import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function CompleteButtonSize1({callApi, resultUrl}) {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const mbti = useSelector(state => state.mbtiReducer);
    const handleOnclick = () => {
        const notAnswer = mbti.choices?.filter(c => c.choice === '');
        if(notAnswer >0){
            return window.alert(`${notAnswer}번에 응답을 안하셨습니다.`);
        }
        window.confirm("제출하시겠습니까?") && dispatch(callApi()).then(res => res && navigator(resultUrl));
    }

    return (
        <Button variant="contained" onClick={handleOnclick} fullWidth
        >
            완료
        </Button>
    );

}