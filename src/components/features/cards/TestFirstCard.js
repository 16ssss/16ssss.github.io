import Typography from "@mui/material/Typography";
import {Autocomplete, Button, TextField, useMediaQuery, useTheme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {SET_MBTI_RESULT, SET_MBTI_USERNAME} from "../../../services/reduces/mbtiReducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const mbtiList = ["ESTP", "ESTJ", "ESFP", "ESFJ", "ENFP", "ENFJ", "ENTP", "ENTJ", "ISTP", "ISTJ", "ISFP", "ISFJ", "INFP", "INFJ", "INTP", "INTJ"];

export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const theme = useTheme();
    const fontSize = useMediaQuery(theme.breakpoints.up('sm')) ? 30 : 20;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChangeHandle = (e) => {
        dispatch({type: [e.target.name], payload: e.target.value})
    }
    const handleOnchangeAutocomplete = (e, newValue) => {
        dispatch({type: SET_MBTI_RESULT, payload: newValue});
    }
    return (
        <Grid2 container={true} columnSpacing={{xs: 0, lg: 5}} rowSpacing={10}>
            <Grid2 xs={12}>
                <Typography variant="h2" align={"center"} padding={0}>
                    YMI의 성격유형 검사 테스트
                </Typography>
            </Grid2>
            <Grid2 xs={6}>
                <Typography variant="h6"
                            align={"center"}
                >
                    "성함"
                </Typography>
                <TextField fullWidth
                           name={SET_MBTI_USERNAME}
                    // placeholder={placeholder}
                           onChange={onChangeHandle}
                           value={mbti.username}
                           helperText="여러분의 성함을 입력해주세요!"
                ></TextField>
            </Grid2>
            <Grid2 xs={6}>
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
            </Grid2>
            <Grid2 xs={12}>
                <Button fullWidth
                        size={"large"}
                        variant={"contained"}
                        onClick={() => {
                            if (window.confirm("테스트를 시작할게!")) {
                                navigate("/questions/slide");
                            }
                        }}
                        disabled={mbti.username === "" || mbti.result === ""}
                >
                    시작하기
                </Button>
            </Grid2>
        </Grid2>
    );
}