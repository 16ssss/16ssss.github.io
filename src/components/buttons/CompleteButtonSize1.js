import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function CompleteButtonSize1({callApi, resultUrl}) {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const handleOnclick = () => {
        dispatch(callApi()).then(res => res && navigator(resultUrl));
    }

    return (
        <Button variant="contained" onClick={handleOnclick} fullWidth>
            완료
        </Button>
    );

}