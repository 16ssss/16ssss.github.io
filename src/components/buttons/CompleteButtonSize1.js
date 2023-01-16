import {Button} from "@mui/material";
import {useDispatch} from "react-redux";

export default function CompleteButtonSize1({callApi}) {
    const dispatch = useDispatch();
    const handleOnclick = () => {
        dispatch(callApi());
    }

    return (
        <Button variant="contained" onClick={handleOnclick} fullWidth>
            완료
        </Button>
    );

}