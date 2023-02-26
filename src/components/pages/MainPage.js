import Typography from "@mui/material/Typography";
import {Autocomplete, Button, TextField, useMediaQuery, useTheme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {SET_MBTI_RESULT, SET_MBTI_USERNAME} from "../../services/reduces/mbtiReducer";
import {useEffect, useMemo} from "react";
import {CallGetMBTIQuestionAPI} from "../../services/apis/mbtiAPICalls";
import {debounce} from "lodash";

const mbtiList = ["ESTP", "ESTJ", "ESFP", "ESFJ", "ENFP", "ENFJ", "ENTP", "ENTJ", "ISTP", "ISTJ", "ISFP", "ISFJ", "INFP", "INFJ", "INTP", "INTJ"];

export default () => {
    const mbti = useSelector(s => s.mbtiReducer);
    const theme = useTheme();
    const fontSize = useMediaQuery(theme.breakpoints.up('sm')) ? 30 : 25;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChangeHandle = (e) => {
        dispatch({type: [e.target.name], payload: e.target.value})
    }
    const handleOnchangeAutocomplete = (e, newValue) => {
        dispatch({type: SET_MBTI_RESULT, payload: newValue});
    }
    useEffect(() => {
        ( mbti.isDone || mbti.id === "" ) && dispatch(CallGetMBTIQuestionAPI());
    }, []);

    return (
        <Grid2 container={true} columnSpacing={{xs: 0, lg: 5}} rowSpacing={{xs:2, sm:3}}>
            <Grid2 xs={12}>
                <Typography fontSize={fontSize} align={"center"} padding={0}>
                    너의 성격을 알아봐!
                </Typography>
            </Grid2>
            <Grid2 xs={12}>
                <TextField fullWidth
                           name={SET_MBTI_USERNAME}
                           onChange={onChangeHandle}
                           value={mbti.username}
                           label="이름"
                           placeholder="이름을 입력해줘!"
                ></TextField>
            </Grid2>
            <Grid2 xs={12}>
                <Autocomplete
                    disablePortal
                    fullWidth
                    id="combo-box-demo"
                    options={mbtiList}
                    sx={{marginBottom: '1vmax'}}
                    onChange={handleOnchangeAutocomplete}
                    value={mbti.result || null}
                    renderInput={(params) => <
                        TextField {...params} placeholder="MBTI" label="MBTI" helperText="이전에 검사한 결과 혹은 예상하는 결과를 적어주세요!"
                    />
                    }
                />
            </Grid2>
            <Grid2 xs={12}>
                <Button fullWidth
                        size={"large"}
                        variant={"contained"}
                        onClick={debounce(() => {
                            if (window.confirm("테스트를 시작할게!")) {
                                navigate("/questions");
                            }
                        },200)}
                        disabled={mbti.username === "" || mbti.result == null}
                >
                    시작하기
                </Button>
            </Grid2>
        </Grid2>
    );
}