import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Fab,
    Modal,
    useTheme
} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FloationUnLikeButton from "../buttons/FloationUnLikeButton";

const StyledBox = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: 10,
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 20,
    boxShadow: 24,
    p: 4,
}))
export default () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle id="alert-dialog-title">
                    저희의 테스트에 참가해줘서 감사합니다!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        테스트의 재미를 위해서 구어체를 사용합니다.
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        만약 문제에 문제가 있거나 맘에 들지 않는다면{" "}
                        <Fab size="small"
                             color="grey"
                             aria-label="unlike"
                             sx={{boxShadow: "none", width: 30, height: 30, minHeight: 0, "&:hover": {boxShadow: "none"}}}
                        >
                            <ThumbDownAltIcon fontSize="small"/>
                        </Fab>
                        {/*<ThumbDownAltIcon fontSize="small" color="gray"/>*/}
                        {" "} 버튼을 눌러주세요!
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={handleClose}>알겠어요!</Button>
                    </DialogActions>
                </DialogContent>
                {/*<StyledBox>*/}
                {/*    <Typography id="modal-modal-title" variant="h6" component="h2">*/}
                {/*        저희의 테스트에 참가해줘서 감사합니다!*/}
                {/*    </Typography>*/}
                {/*    <Typography id="modal-modal-description" sx={{mt: 2}} align={"center"}>*/}
                {/*        만약 문제가 이상하거나 맘에 안들면 {" "}*/}
                {/*        <span>*/}
                {/*            <ThumbDownAltIcon fontSize="small" color="gray"/>*/}
                {/*        </span>*/}
                {/*        {" "}버튼을 눌러주세요!*/}
                {/*    </Typography>*/}
                {/*    <Box display="flex" justifyContent="end">*/}
                {/*        <Button onClick={handleClose}>*/}
                {/*            알겠어요!*/}
                {/*        </Button>*/}
                {/*    </Box>*/}
                {/*</StyledBox>*/}
            </Dialog>
        </>
    );
}